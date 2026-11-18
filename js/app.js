// Speaker Database
// Портреты лежат в img/speakers: <slug>.jpg (960×1200) и <slug>-avatar.jpg (280×280).
const speakersData = {
  'renata-nureyeva': {
    name: 'Рената Нуреева',
    position: 'CEO\u00A0&amp; Founder, ProHunters',
    photo: 'img/speakers/renata-nureyeva.jpg',
    initials: 'РН',
    bio: '<p>Основала агентство recruitment\u00A0&amp; executive\u00A0search\u00A0— ProHunters. Команда подбирает ключевых специалистов и\u00A0руководителей для\u00A0среднего и\u00A0крупного бизнеса в\u00A0Казахстане, Центральной\u00A0Азии, ОАЭ, Европе, Африке и\u00A0США.</p>',
    topic: null
  },
  'zaura-karakozhaeva': {
    name: 'Заура Каракожаева',
    position: '<span class="nowrap">Консультант-аналитик</span> ProHunters\u00A0· HR\u00A0Advisor, NCOC',
    photo: 'img/speakers/zaura-karakozhaeva.jpg',
    initials: 'ЗК',
    bio: '<p>14\u00A0лет работает в\u00A0HR и\u00A0Total\u00A0Rewards. Занимается компенсациями, аналитикой зарплат, грейдированием и\u00A0бюджетом на\u00A0персонал. Соавтор исследования «Рейтинг работодателей Казахстана».</p>',
    topic: null
  },
  'natalia-timofeeva': {
    name: 'Наталья Тимофеева',
    position: 'Внешний консультант ProHunters\u00A0· <span class="nowrap">ex-HRD</span> KPMG и\u00A0Исламского банка',
    photo: 'img/speakers/natalia-timofeeva.jpg',
    initials: 'НТ',
    bio: '<p>Более 15\u00A0лет работает в\u00A0международных компаниях: IT, телеком, финансы и\u00A0консалтинг. Специализируется на\u00A0вознаграждении, организационном проектировании и\u00A0<span class="nowrap">HR-аналитике</span>. Лауреат премии «Хрустальная\u00A0пирамида».</p>',
    topic: null
  },
  'asel-mashanova': {
    name: 'Асель Машанова',
    position: 'Сооснователь LULU\u00A0Group',
    photo: 'img/speakers/asel-mashanova.jpg',
    initials: 'АМ',
    bio: '<p>Предпринимательница. Создала проекты LULU, Metabody, Meta\u00A0Farm и\u00A0Sau\u00A0Apothecary о\u00A0красоте, здоровье и\u00A0осознанном образе жизни.</p>',
    topic: 'О\u00A0карьере, амбициях и\u00A0личном выборе. Точную тему объявим позже.'
  },
  'galiya-khamitova': {
    name: 'Галия Хамитова',
    position: 'Президент Erickson Coaching International Central\u00A0Asia',
    photo: 'img/speakers/galiya-khamitova.jpg',
    initials: 'ГХ',
    bio: '<p>Коуч уровня PCC\u00A0ICF, <span class="nowrap">ментор-коуч</span> и\u00A0<span class="nowrap">коуч-супервизор</span> с\u00A0квалификациями ICF и\u00A0EMCC. Провела более 6\u00A0000\u00A0часов индивидуального коучинга с\u00A0<span class="nowrap">топ-руководителями</span>.</p>',
    topic: null
  },
  'karashash-dzhuzeeva': {
    name: 'Карашаш Джузеева',
    position: 'Предпринимательница, издатель Vintage\u00A0Kazakhstan',
    photo: 'img/speakers/karashash-dzhuzeeva.jpg',
    initials: 'КД',
    bio: '<p>Медиаменеджер и\u00A0общественный деятель. Основала журнал Vintage\u00A0Kazakhstan и\u00A0остаётся его издателем, развивает предпринимательские и\u00A0культурные проекты.</p>',
    topic: null
  },
  'ilyas-bakirov': {
    name: 'Ильяс Бакиров',
    position: 'Основатель и\u00A0управляющий партнёр MKS\u00A0Kusto\u00A0Logistics',
    photo: 'img/speakers/ilyas-bakirov.jpg',
    initials: 'ИБ',
    bio: '<p>Предприниматель, учредитель Bakirov Construction Group и\u00A0член благотворительного фонда BIRLIK.</p>',
    topic: null
  },
  'maksat-zharasbaev': {
    name: 'Максат Жарасбаев',
    position: 'Генеральный директор Inditex\u00A0Kazakhstan\u00A0· Country\u00A0Manager',
    photo: 'img/speakers/maksat-zharasbaev.jpg',
    initials: 'МЖ',
    bio: '<p>Руководит бизнесом Inditex в\u00A0Казахстане. Работал в\u00A0ритейле и\u00A0управлении персоналом на\u00A0международном уровне, в\u00A0том числе на\u00A0руководящих <span class="nowrap">HR-позициях</span> в\u00A0структуре группы.</p>',
    topic: null
  },
  'moldir-seidan': {
    name: 'Молдир Сейдан',
    position: 'Основатель HR\u00A0KEY\u00A0· <span class="nowrap">HR-предприниматель</span>\u00A0· Executive\u00A0Coach',
    photo: 'img/speakers/moldir-seidan.jpg',
    initials: 'МС',
    bio: '<p>Более 15\u00A0лет в\u00A0HR. Советник CEO ANORBANK, сертифицированный <span class="nowrap">executive-коуч</span>, автор подкастов о\u00A0бизнесе. Пятикратная победительница премии «<span class="nowrap">HR-бренд</span> Центральная\u00A0Азия» от\u00A0HeadHunter.</p>',
    topic: '«Эволюция карьеры: от\u00A0амбиций к\u00A0свободе»'
  }
};

// Modal Elements
const modal = document.getElementById('speaker-modal');
const modalOverlay = modal.querySelector('.modal-overlay');
const modalClose = modal.querySelector('.modal-close');
const modalPhoto = modal.querySelector('#modal-speaker-photo');
const modalInitials = modal.querySelector('#modal-speaker-initials');
const modalName = modal.querySelector('.modal-name');
const modalPosition = modal.querySelector('.modal-position');
const modalBio = modal.querySelector('.modal-bio');
const modalTopic = modal.querySelector('.modal-topic');
const modalTopicText = modal.querySelector('.modal-topic-text');

// Open Modal Function
function openModal(speakerId) {
  const speaker = speakersData[speakerId];

  if (!speaker) return;

  // Populate content
  if (speaker.photo) {
    modalPhoto.src = speaker.photo;
    modalPhoto.alt = speaker.name;
    modalPhoto.hidden = false;
    modalInitials.hidden = true;
  } else {
    modalPhoto.removeAttribute('src');
    modalPhoto.alt = '';
    modalPhoto.hidden = true;
    modalInitials.textContent = speaker.initials;
    modalInitials.hidden = false;
  }
  modalName.textContent = speaker.name;
  modalPosition.innerHTML = speaker.position;
  modalBio.innerHTML = speaker.bio;

  // Show/hide topic section
  if (speaker.topic) {
    modalTopicText.textContent = speaker.topic;
    modalTopic.style.display = 'block';
  } else {
    modalTopic.style.display = 'none';
  }

  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Focus on close button for accessibility
  setTimeout(() => modalClose.focus(), 100);
}

// Close Modal Function
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Event Listeners - Speaker Cards
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.speaker-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.speaker));
  });

  const speakerCards = document.querySelectorAll('.speaker-mini-card');

  speakerCards.forEach(card => {
    card.addEventListener('click', () => {
      const speakerId = card.dataset.speaker;
      openModal(speakerId);
    });

    // Keyboard accessibility
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const speakerId = card.dataset.speaker;
        openModal(speakerId);
      }
    });
  });
});

// Event Listeners - Modal Close
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// Prevent modal body scroll from closing
modal.querySelector('.modal-content').addEventListener('click', (e) => {
  e.stopPropagation();
});

// ============================================
// AWARD CONFETTI PERFORMANCE OPTIMIZATION
// ============================================

// Pause confetti animation when award block is off-screen
document.addEventListener('DOMContentLoaded', () => {
  const awardBlock = document.querySelector('.timeline-item.award');

  if (!awardBlock) return;

  const confettiContainer = awardBlock.querySelector('.award-confetti-container');

  if (!confettiContainer) return;

  // Intersection Observer to pause/resume animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Resume animation when in viewport
        confettiContainer.style.animationPlayState = 'running';
        confettiContainer.querySelectorAll('.confetti-particle').forEach(particle => {
          particle.style.animationPlayState = 'running';
        });
      } else {
        // Pause animation when off-screen
        confettiContainer.style.animationPlayState = 'paused';
        confettiContainer.querySelectorAll('.confetti-particle').forEach(particle => {
          particle.style.animationPlayState = 'paused';
        });
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  });

  observer.observe(awardBlock);
});

// ============================================
// REGISTRATION FORM
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form');

  if (!form) return;

  const ENDPOINT_PATTERN = /^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/;
  const TURNSTILE_SCRIPT = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
  const REQUEST_TIMEOUT_MS = 30000;
  const ERROR_MESSAGES = {
    invalid: 'Проверьте, правильно ли заполнены поля.',
    captcha: 'Проверка безопасности не\u00A0прошла. Попробуйте ещё раз.',
    rate_limited: 'Сейчас слишком много заявок. Попробуйте через минуту.',
    closed: 'Регистрация на\u00A0встречу завершена.',
    full: 'Регистрация закрыта: все места заняты.',
    default: 'Не\u00A0удалось отправить заявку. Попробуйте ещё раз или напишите Аиде.'
  };

  const endpoint = form.dataset.endpoint || '';
  const siteKey = form.dataset.turnstileSitekey || '';
  const submitButton = document.getElementById('registration-submit');
  const statusElement = document.getElementById('registration-status');
  const successPanel = document.getElementById('registration-success');

  let turnstileToken = '';
  let widgetId = null;
  let isSubmitting = false;

  function setStatus(message, isError = false) {
    statusElement.textContent = message;
    statusElement.classList.toggle('form-status--error', isError);
  }

  function resetTurnstile() {
    turnstileToken = '';
    if (widgetId !== null && window.turnstile) {
      window.turnstile.reset(widgetId);
    }
  }

  function renderTurnstile() {
    widgetId = window.turnstile.render('#turnstile-widget', {
      sitekey: siteKey,
      action: 'register',
      language: 'ru',
      theme: 'dark',
      callback: (token) => {
        turnstileToken = token;
      },
      'expired-callback': () => {
        turnstileToken = '';
      },
      'error-callback': () => {
        turnstileToken = '';
        setStatus(ERROR_MESSAGES.captcha, true);
      }
    });
    submitButton.disabled = false;
    setStatus('');
  }

  function loadTurnstile() {
    const script = document.createElement('script');
    script.src = TURNSTILE_SCRIPT;
    script.async = true;
    script.addEventListener('load', renderTurnstile);
    script.addEventListener('error', () => setStatus(ERROR_MESSAGES.default, true));
    document.head.appendChild(script);
  }

  async function submitRegistration(payload) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      // text/plain не вызывает CORS preflight, который Apps Script не обрабатывает
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        redirect: 'follow',
        credentials: 'omit',
        referrerPolicy: 'no-referrer',
        signal: controller.signal
      });
      return await response.json();
    } finally {
      clearTimeout(timeoutId);
    }
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const data = new FormData(form);
    const firstName = String(data.get('firstName')).trim();
    const lastName = String(data.get('lastName')).trim();
    const company = String(data.get('company')).trim();

    if (!firstName || !lastName || !company) {
      setStatus(ERROR_MESSAGES.invalid, true);
      return;
    }

    if (!turnstileToken) {
      setStatus('Подождите пару секунд, пока завершится проверка, и\u00A0нажмите кнопку ещё раз.', true);
      return;
    }

    isSubmitting = true;
    submitButton.disabled = true;
    setStatus('Отправляем заявку…');

    try {
      const result = await submitRegistration({
        firstName,
        lastName,
        company,
        consent: data.get('consent') === 'on',
        website: String(data.get('website') || ''),
        token: turnstileToken
      });

      if (result.ok === true) {
        form.hidden = true;
        successPanel.hidden = false;
        successPanel.focus();
        return;
      }

      setStatus(ERROR_MESSAGES[result.code] || ERROR_MESSAGES.default, true);
    } catch (error) {
      setStatus(ERROR_MESSAGES.default, true);
    }

    isSubmitting = false;
    submitButton.disabled = false;
    resetTurnstile();
  });

  if (ENDPOINT_PATTERN.test(endpoint) && siteKey) {
    loadTurnstile();
  }
});
