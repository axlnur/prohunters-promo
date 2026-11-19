/**
  * Accepts ProHunters 2026 registrations into a private Google Sheet.
  *
  * Deployed as a web app bound to the sheet: runs as the owner, open to anyone.
  * It only appends rows and never returns sheet data.
  *
  * Script Properties:
  *   TURNSTILE_SECRET   Cloudflare Turnstile secret key, never stored in the repository
  *   ALLOWED_HOSTNAMES  comma-separated form hostnames, defaults to 2026.prohunters.kz
 */

var CONFIG = {
  SHEET_NAME: 'Регистрации',
  // New columns go last so existing rows keep their positions.
  HEADERS: ['Дата и время', 'Имя', 'Фамилия', 'Компания', 'Согласие', 'Email', 'Телефон'],
  TIME_ZONE: 'Asia/Almaty',
  CLOSES_AT_MS: Date.parse('2026-12-11T09:15:00+05:00'),
  MAX_BODY_LENGTH: 4096,
  MAX_TOKEN_LENGTH: 2048,
  MAX_REGISTRATIONS: 1500,
  LIMITS: { firstName: 80, lastName: 80, company: 160, email: 254, phone: 25 },
  PHONE_DIGITS: { min: 10, max: 15 },
  // The loose limit before the captcha saves quota; the strict one after it limits writes.
  RATE_LIMITS: {
    incoming: [{ seconds: 60, max: 60 }, { seconds: 3600, max: 600 }],
    accepted: [{ seconds: 60, max: 20 }, { seconds: 3600, max: 200 }]
  },
  LOCK_TIMEOUT_MS: 10000,
  TURNSTILE_URL: 'https://challenges.cloudflare.com/turnstile/v0/siteverify',
  TURNSTILE_ACTION: 'register',
  DEFAULT_HOSTNAMES: '2026.prohunters.kz'
};

var NAME_PATTERN = /^\p{L}[\p{L}\p{M} .'’-]*$/u;
var COMPANY_PATTERN = /^[\p{L}\p{N}«"'“„(][\p{L}\p{M}\p{N} .,'’"«»“”„&()+\/№#:!-]*$/u;
// Keep in sync with js/app.js.
var EMAIL_LOCAL_PATTERN = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+$/i;
var EMAIL_LABEL_PATTERN = /^(?!-)[\p{L}\p{N}-]{1,63}(?<!-)$/u;
var EMAIL_TLD_PATTERN = /^(?:\p{L}{2,}|xn--[a-z0-9-]+)$/iu;
var PHONE_PATTERN = /^\+?[\d\s()-]+$/;
var FORMULA_PREFIX_PATTERN = /^[=+\-@\t\r\n＝＋－＠]/;

function doGet() {
  return jsonResponse_({ ok: false, code: 'method_not_allowed' });
}

function doPost(e) {
  try {
    return jsonResponse_(handleRegistration_(e));
  } catch (error) {
    // Log only the error type, never personal data.
    console.error('registration_failed', error && error.name);
    return jsonResponse_({ ok: false, code: 'server_error' });
  }
}

function handleRegistration_(e) {
  var body = parseBody_(e);
  if (!body) return { ok: false, code: 'invalid' };

  // Bots get a success response so they cannot detect the trap.
  if (body.website) return { ok: true };

  if (Date.now() >= CONFIG.CLOSES_AT_MS) return { ok: false, code: 'closed' };

  var guest = validateGuest_(body);
  if (!guest) return { ok: false, code: 'invalid' };

  if (!consumeRateLimit_('incoming')) return { ok: false, code: 'rate_limited' };
  if (!verifyTurnstile_(body.token)) return { ok: false, code: 'captcha' };
  if (!consumeRateLimit_('accepted')) return { ok: false, code: 'rate_limited' };

  return saveGuest_(guest);
}

function parseBody_(e) {
  var contents = e && e.postData && e.postData.contents;
  if (typeof contents !== 'string' || contents.length > CONFIG.MAX_BODY_LENGTH) return null;

  try {
    var body = JSON.parse(contents);
    return body && typeof body === 'object' && !Array.isArray(body) ? body : null;
  } catch (error) {
    return null;
  }
}

function validateGuest_(body) {
  if (body.consent !== true) return null;

  var firstName = cleanText_(body.firstName, CONFIG.LIMITS.firstName);
  var lastName = cleanText_(body.lastName, CONFIG.LIMITS.lastName);
  var company = cleanText_(body.company, CONFIG.LIMITS.company);

  if (!firstName || !lastName || !company) return null;
  if (!NAME_PATTERN.test(firstName) || !NAME_PATTERN.test(lastName)) return null;
  if (!COMPANY_PATTERN.test(company)) return null;

  var email = cleanOptionalText_(body.email, CONFIG.LIMITS.email);
  var phone = cleanOptionalText_(body.phone, CONFIG.LIMITS.phone);

  if (email === null || phone === null) return null;
  if (!email && !phone) return null;
  if (email && !isValidEmail_(email)) return null;
  if (phone && !isValidPhone_(phone)) return null;

  return { firstName: firstName, lastName: lastName, company: company, email: email, phone: phone };
}

// '' for an empty or missing value, null for an invalid one.
function cleanOptionalText_(value, maxLength) {
  if (value === undefined || value === null || value === '') return '';
  if (typeof value !== 'string') return null;
  if (!value.trim()) return '';

  return cleanText_(value, maxLength) || null;
}

function isValidEmail_(email) {
  var at = email.lastIndexOf('@');
  var local = email.slice(0, at);
  var labels = email.slice(at + 1).split('.');

  return at > 0 && email.length <= 254 && local.length <= 64 &&
    EMAIL_LOCAL_PATTERN.test(local) && !/^\.|\.\.|\.$/.test(local) &&
    labels.length >= 2 &&
    labels.every(function (label) { return EMAIL_LABEL_PATTERN.test(label); }) &&
    EMAIL_TLD_PATTERN.test(labels[labels.length - 1]);
}

// +7 numbers (Kazakhstan, Russia) have exactly 11 digits.
function isValidPhone_(phone) {
  var digits = phone.replace(/\D/g, '').length;

  if (!PHONE_PATTERN.test(phone)) return false;
  if (/^\+\s*7/.test(phone)) return digits === 11;
  return digits >= CONFIG.PHONE_DIGITS.min && digits <= CONFIG.PHONE_DIGITS.max;
}

function cleanText_(value, maxLength) {
  if (typeof value !== 'string' || value.length > maxLength * 2) return '';

  var text = value
    .normalize('NFC')
    .replace(/[\p{Cf}]/gu, '')
    .replace(/\s+/gu, ' ')
    .trim();

  return text.length <= maxLength ? text : '';
}

function consumeRateLimit_(tier) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(CONFIG.LOCK_TIMEOUT_MS)) return false;

  try {
    var cache = CacheService.getScriptCache();
    var now = Math.floor(Date.now() / 1000);
    var windows = CONFIG.RATE_LIMITS[tier].map(function (limit) {
      var key = 'rate:' + tier + ':' + limit.seconds + ':' + Math.floor(now / limit.seconds);
      return { key: key, seconds: limit.seconds, max: limit.max, count: Number(cache.get(key)) || 0 };
    });

    var isAllowed = windows.every(function (item) { return item.count < item.max; });
    if (!isAllowed) return false;

    windows.forEach(function (item) {
      cache.put(item.key, String(item.count + 1), item.seconds);
    });
    return true;
  } finally {
    lock.releaseLock();
  }
}

function verifyTurnstile_(token) {
  var properties = PropertiesService.getScriptProperties();
  var secret = properties.getProperty('TURNSTILE_SECRET');

  // Without a secret the form stays closed.
  if (!secret) return false;
  if (typeof token !== 'string' || !token || token.length > CONFIG.MAX_TOKEN_LENGTH) return false;

  var response = UrlFetchApp.fetch(CONFIG.TURNSTILE_URL, {
    method: 'post',
    payload: { secret: secret, response: token },
    muteHttpExceptions: true,
    followRedirects: false
  });
  if (response.getResponseCode() !== 200) return false;

  var result = JSON.parse(response.getContentText());
  var allowedHostnames = (properties.getProperty('ALLOWED_HOSTNAMES') || CONFIG.DEFAULT_HOSTNAMES)
    .split(',')
    .map(function (hostname) { return hostname.trim().toLowerCase(); });

  return result.success === true &&
    result.action === CONFIG.TURNSTILE_ACTION &&
    allowedHostnames.indexOf(String(result.hostname).toLowerCase()) !== -1;
}

function saveGuest_(guest) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(CONFIG.LOCK_TIMEOUT_MS)) return { ok: false, code: 'rate_limited' };

  try {
    var sheet = getSheet_();
    var guestCount = Math.max(sheet.getLastRow() - 1, 0);

    // A repeated registration succeeds without adding a row.
    if (guestCount > 0 && isDuplicate_(sheet, guest, guestCount)) return { ok: true };
    if (guestCount >= CONFIG.MAX_REGISTRATIONS) return { ok: false, code: 'full' };

    var row = [
      Utilities.formatDate(new Date(), CONFIG.TIME_ZONE, 'yyyy-MM-dd HH:mm:ss'),
      neutralizeFormula_(guest.firstName),
      neutralizeFormula_(guest.lastName),
      neutralizeFormula_(guest.company),
      'Да',
      neutralizeFormula_(guest.email),
      neutralizeFormula_(guest.phone)
    ];

    sheet.getRange(sheet.getLastRow() + 1, 1, 1, row.length)
      .setNumberFormat('@')
      .setValues([row]);

    return { ok: true };
  } finally {
    lock.releaseLock();
  }
}

function getSheet_() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.SHEET_NAME);
    sheet.setFrozenRows(1);
  }

  // Sheets created before the contact columns get the missing headers.
  if (sheet.getLastColumn() < CONFIG.HEADERS.length) {
    sheet.getRange(1, 1, 1, CONFIG.HEADERS.length)
      .setValues([CONFIG.HEADERS])
      .setFontWeight('bold');
  }
  return sheet;
}

// Contacts are part of the key so a corrected email or phone is not lost.
function isDuplicate_(sheet, guest, guestCount) {
  var expected = guestKey_([guest.firstName, guest.lastName, guest.company, guest.email, guest.phone]);
  var rows = sheet.getRange(2, 1, guestCount, CONFIG.HEADERS.length).getDisplayValues();

  return rows.some(function (row) {
    return guestKey_([row[1], row[2], row[3], row[5], row[6]]) === expected;
  });
}

function guestKey_(values) {
  return values
    .map(function (value) { return String(value).replace(/^'/, '').toLowerCase(); })
    .join('|');
}

function neutralizeFormula_(value) {
  return FORMULA_PREFIX_PATTERN.test(value) ? "'" + value : value;
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
