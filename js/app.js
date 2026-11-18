// Speaker Database
// Портреты лежат в img/speakers: <slug>.jpg (960×1200) и <slug>-avatar.jpg (280×280).
// Тема и подпись общие для всех участников панельной дискуссии
const PANEL_DISCUSSION = {
  topic: '«Сильный бизнес. Живые люди. Как достигать результатов, не\u00A0истощая себя и\u00A0команду»',
  topicLabel: 'Панельная дискуссия на\u00A0тему:'
};

const RESEARCH_PRESENTATION_TOPIC = 'Презентация исследования «Рейтинг работодателей Казахстана\u00A02026»';

const speakersData = {
  'renata-nureyeva': {
    name: 'Рената Нуреева',
    position: 'CEO\u00A0&amp; Founder, ProHunters',
    photo: 'img/speakers/renata-nureyeva.jpg',
    initials: 'РН',
    bio: '<p>Команда Ренаты закрывает вакансии ключевых специалистов и\u00A0руководителей для\u00A0среднего и\u00A0крупного бизнеса в\u00A0Казахстане, Центральной\u00A0Азии, ОАЭ, Европе, Африке и\u00A0США.</p>',
    topic: RESEARCH_PRESENTATION_TOPIC
  },
  'zaura-karakozhaeva': {
    name: 'Заура Каракожаева',
    position: '<span class="nowrap">Консультант-аналитик</span> ProHunters\u00A0· HR\u00A0Advisor, NCOC',
    photo: 'img/speakers/zaura-karakozhaeva.jpg',
    initials: 'ЗК',
    bio: '<p>14\u00A0лет опыта в\u00A0HR и\u00A0Total\u00A0Rewards. Эксперт по\u00A0компенсациям, аналитике зарплат, грейдированию и\u00A0бюджету персонала. Соавтор исследования «Рейтинг работодателей Казахстана».</p>',
    topic: RESEARCH_PRESENTATION_TOPIC
  },
  'natalia-timofeeva': {
    name: 'Наталья Тимофеева',
    position: 'Внешний консультант ProHunters\u00A0· <span class="nowrap">ex-HRD</span> KPMG и\u00A0Исламского банка',
    photo: 'img/speakers/natalia-timofeeva.jpg',
    initials: 'НТ',
    bio: '<p>Более 15\u00A0лет в\u00A0международных компаниях в\u00A0IT, телекоме, финансах и\u00A0консалтинге. Эксперт по\u00A0вознаграждению, организационном проектировании и\u00A0<span class="nowrap">HR-аналитике</span>. Лауреат премии «Хрустальная\u00A0пирамида».</p>',
    topic: RESEARCH_PRESENTATION_TOPIC
  },
  'asel-mashanova': {
    name: 'Асель Машанова',
    position: 'Сооснователь LULU\u00A0Group',
    photo: 'img/speakers/asel-mashanova.jpg',
    initials: 'АМ',
    bio: '<p>Предприниматель, создатель проектов LULU, Metabody, Meta\u00A0Farm и\u00A0Sau\u00A0Apothecary на\u00A0пересечении красоты, здоровья и\u00A0осознанного образа жизни.</p>',
    topic: '«Как быть успешным в\u00A0мире технологий и\u00A0оставаться собой»'
  },
  'galiya-khamitova': {
    name: 'Галия Хамитова',
    position: 'Президент Erickson Coaching International Central\u00A0Asia',
    photo: 'img/speakers/galiya-khamitova.jpg',
    initials: 'ГХ',
    bio: '<p>Профессиональный коуч PCC\u00A0ICF, <span class="nowrap">ментор-коуч</span> и\u00A0<span class="nowrap">коуч-супервизор</span> с\u00A0квалификациями ICF и\u00A0EMCC. Более 6\u00A0000\u00A0часов индивидуального коучинга <span class="nowrap">топ-руководителей</span>.</p>',
    ...PANEL_DISCUSSION
  },
  'karashash-dzhuzeeva': {
    name: 'Карашаш Джузеева',
    position: 'Предприниматель, издатель Vintage\u00A0Kazakhstan',
    photo: 'img/speakers/karashash-dzhuzeeva.jpg',
    initials: 'КД',
    bio: '<p>Медиаменеджер и\u00A0общественный деятель. Основатель и\u00A0издатель журнала Vintage\u00A0Kazakhstan. Развивает предпринимательские и\u00A0культурные проекты.</p>',
    ...PANEL_DISCUSSION
  },
  'ilyas-bakirov': {
    name: 'Ильяс Бакиров',
    position: 'Основатель и\u00A0управляющий партнёр MKS\u00A0Kusto\u00A0Logistics',
    photo: 'img/speakers/ilyas-bakirov.jpg',
    initials: 'ИБ',
    bio: '<p>Предприниматель, учредитель Bakirov Construction Group и\u00A0член благотворительного фонда BIRLIK.</p>',
    ...PANEL_DISCUSSION
  },
  'maksat-zharasbaev': {
    name: 'Максат Жарасбаев',
    position: 'Генеральный директор Inditex\u00A0Kazakhstan\u00A0· Country\u00A0Manager',
    photo: 'img/speakers/maksat-zharasbaev.jpg',
    initials: 'МЖ',
    bio: '<p>Руководитель бизнеса Inditex в\u00A0Казахстане с\u00A0международным опытом в\u00A0ритейле и\u00A0управлении персоналом. Ранее занимал руководящие <span class="nowrap">HR-позиции</span> в\u00A0международной структуре группы.</p>',
    ...PANEL_DISCUSSION
  },
  'moldir-seidan': {
    name: 'Молдир Сейдан',
    position: 'Основатель HR\u00A0KEY\u00A0· <span class="nowrap">HR-предприниматель</span>\u00A0· Executive\u00A0Coach',
    photo: 'img/speakers/moldir-seidan.jpg',
    initials: 'МС',
    bio: '<p>Более 15\u00A0лет в\u00A0HR. Советник CEO ANORBANK, сертифицированный <span class="nowrap">executive-коуч</span>, автор подкастов о\u00A0бизнесе. Пятикратный победитель премии «<span class="nowrap">HR-бренд</span> Центральная\u00A0Азия» от\u00A0HeadHunter.</p>',
    topic: '«Эволюция карьеры: от\u00A0амбиций к\u00A0свободе»'
  },
  'grigory-shanin': {
    name: 'Григорий Шанин',
    position: 'Ведущий и\u00A0модератор мероприятия.',
    photo: 'img/speakers/grigory-shanin.jpg',
    initials: 'ГШ',
    bio: '<p>Создаёт атмосферу живого диалога и\u00A0помогает гостям включаться в\u00A0обсуждение.</p>',
    topic: null
  },
  'aida-shagiyeva': {
    name: 'Аида Шагиева',
    position: 'Операционный директор ProHunters',
    photo: 'img/speakers/aida-shagiyeva.jpg',
    initials: 'АШ',
    bio: '<p>Отвечает за\u00A0организацию и\u00A0оптимизацию операционных процессов в\u00A0ProHunters. Выстраивает взаимодействие внутри команды, чтобы проекты клиентов шли слаженно и\u00A0в\u00A0срок. Координирует подготовку встречи и\u00A0отвечает на\u00A0вопросы гостей.</p>',
    topic: null
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
const modalTopicLabel = modal.querySelector('.modal-topic-label');
const modalTopicText = modal.querySelector('.modal-topic-text');
const DEFAULT_TOPIC_LABEL = modalTopicLabel.textContent;

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
    modalTopicLabel.textContent = speaker.topicLabel || DEFAULT_TOPIC_LABEL;
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
  document.querySelectorAll('.speaker-card, .cta-note__person').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.speaker));
  });

  const speakerCards = document.querySelectorAll('.speaker-mini-card, .moderator-accent-block');

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
// SPEAKER AVATAR CAROUSEL
// ============================================

// Порядок случайный при каждой загрузке, поэтому ни один спикер не закреплён на первом месте
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.bento-avatars');

  if (!carousel) return;

  const track = carousel.querySelector('.bento-avatars__track');
  const avatars = [...track.children];

  for (let index = avatars.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [avatars[index], avatars[swapIndex]] = [avatars[swapIndex], avatars[index]];
  }

  // С клавиатуры доступен только исходный набор, копии открываются мышью и касанием
  const cloneSet = () => avatars.map((avatar) => {
    const clone = avatar.cloneNode(true);

    clone.tabIndex = -1;
    clone.setAttribute('aria-hidden', 'true');
    return clone;
  });

  // Копии по обе стороны от исходного набора делают цикл бесшовным на карточке любой ширины
  track.replaceChildren(...cloneSet(), ...avatars, ...cloneSet(), ...cloneSet());

  const AUTO_SECONDS_PER_SET = 30;
  const DRAG_THRESHOLD_PX = 6;
  const MAX_THROW_SPEED = 1200;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  let setWidth = 1;
  let offset = 0;
  let autoSpeed = 0;
  let throwSpeed = 0;
  let lastFrame = 0;
  let frameId = null;
  let isHovered = false;
  let hasKeyboardFocus = false;
  let suppressClick = false;
  let drag = null;

  function measure() {
    setWidth = track.children[avatars.length].offsetLeft - track.children[0].offsetLeft;
  }

  function render() {
    // Сдвиг остаётся в пределах одного набора, поэтому цикл бесшовный в обе стороны.
    // При фокусе с клавиатуры выбранная аватарка должна оставаться на экране.
    if (!hasKeyboardFocus) offset = ((offset % setWidth) - setWidth) % setWidth;
    track.style.transform = `translate3d(${offset}px, 0, 0)`;
  }

  function tick(now) {
    const seconds = Math.min((now - lastFrame) / 1000, 0.05);
    lastFrame = now;

    if (!drag) {
      const isPaused = isHovered || hasKeyboardFocus || reducedMotion.matches;
      const targetSpeed = isPaused ? 0 : -setWidth / AUTO_SECONDS_PER_SET;

      autoSpeed += (targetSpeed - autoSpeed) * (1 - Math.exp(-seconds * 4));
      throwSpeed *= Math.exp(-seconds * 3.5);
      if (Math.abs(throwSpeed) < 1) throwSpeed = 0;

      offset += (autoSpeed + throwSpeed) * seconds;
      render();
    }

    frameId = requestAnimationFrame(tick);
  }

  function start() {
    if (frameId !== null) return;
    lastFrame = performance.now();
    frameId = requestAnimationFrame(tick);
  }

  function stop() {
    if (frameId === null) return;
    cancelAnimationFrame(frameId);
    frameId = null;
  }

  function endDrag(event) {
    if (!drag || event.pointerId !== drag.pointerId) return;

    if (drag.isMoving) {
      const isFresh = event.timeStamp - drag.lastTime < 80;

      suppressClick = true;
      carousel.classList.remove('is-dragging');
      throwSpeed = isFresh && !reducedMotion.matches
        ? Math.max(-MAX_THROW_SPEED, Math.min(MAX_THROW_SPEED, drag.speed))
        : 0;
    }

    drag = null;
  }

  carousel.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;

    suppressClick = false;
    throwSpeed = 0;
    drag = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startOffset: offset,
      lastX: event.clientX,
      lastTime: event.timeStamp,
      speed: 0,
      isMoving: false
    };
  });

  carousel.addEventListener('pointermove', (event) => {
    if (!drag || event.pointerId !== drag.pointerId) return;

    const distance = event.clientX - drag.startX;

    if (!drag.isMoving) {
      if (Math.abs(distance) < DRAG_THRESHOLD_PX) return;
      drag.isMoving = true;
      carousel.setPointerCapture(event.pointerId);
      carousel.classList.add('is-dragging');
    }

    const elapsed = event.timeStamp - drag.lastTime;

    if (elapsed > 0) {
      const speed = ((event.clientX - drag.lastX) / elapsed) * 1000;
      drag.speed = drag.speed * 0.7 + speed * 0.3;
    }

    drag.lastX = event.clientX;
    drag.lastTime = event.timeStamp;
    offset = drag.startOffset + distance;
    render();
  });

  carousel.addEventListener('pointerup', endDrag);
  carousel.addEventListener('pointercancel', endDrag);
  carousel.addEventListener('dragstart', (event) => event.preventDefault());

  carousel.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') isHovered = true;
  });

  carousel.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse') isHovered = false;
  });

  // Выбранная с клавиатуры аватарка сдвигается в видимую часть карусели
  carousel.addEventListener('focusin', (event) => {
    if (!event.target.matches(':focus-visible')) return;

    const area = carousel.getBoundingClientRect();
    const avatar = event.target.getBoundingClientRect();

    hasKeyboardFocus = true;
    offset += area.left + area.width / 2 - (avatar.left + avatar.width / 2);
    render();
  });

  carousel.addEventListener('focusout', () => {
    hasKeyboardFocus = false;
  });

  carousel.addEventListener('click', (event) => {
    if (suppressClick) {
      suppressClick = false;
      return;
    }

    const avatar = event.target.closest('.bento-avatar');

    if (avatar) openModal(avatar.dataset.speaker);
  });

  window.addEventListener('resize', measure);
  measure();
  render();

  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) start();
    else stop();
  }).observe(carousel);
});

// ============================================
// RESEARCH CHART ANIMATION
// ============================================

// Случайный столбик растёт или опускается, при этом график сохраняет общую форму
document.addEventListener('DOMContentLoaded', () => {
  const chart = document.querySelector('.bento-bars');

  if (!chart || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const MAX_SHIFT = 22;
  const MIN_SHIFT = 6;
  const MAX_FALL_RATIO = 0.45;
  const bars = [...chart.children];
  const baseHeights = bars.map((bar) => (bar.offsetHeight / chart.clientHeight) * 100);
  const heights = [...baseHeights];

  let lastIndex = -1;
  let timerId = null;
  let isVisible = false;

  function moveRandomBar() {
    let index = Math.floor(Math.random() * (bars.length - 1));
    if (index >= lastIndex && lastIndex !== -1) index += 1;
    lastIndex = index;

    const base = baseHeights[index];
    const isFalling = heights[index] >= base;
    const limit = isFalling ? Math.min(MAX_SHIFT, base * MAX_FALL_RATIO) : MAX_SHIFT;
    const shift = MIN_SHIFT + Math.random() * (limit - MIN_SHIFT);

    heights[index] = Math.min(100, base + (isFalling ? -shift : shift));
    bars[index].style.height = `${heights[index]}%`;
    schedule();
  }

  function schedule() {
    timerId = setTimeout(moveRandomBar, 700 + Math.random() * 600);
  }

  function update() {
    clearTimeout(timerId);
    timerId = null;
    if (isVisible && !document.hidden) schedule();
  }

  document.addEventListener('visibilitychange', update);

  new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    update();
  }).observe(chart);
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
  const STATUS_TRANSITION_MS = 300;
  const ERROR_MESSAGES = {
    invalid: 'Проверьте, что все поля заполнены корректно.',
    captcha: 'Не\u00A0удалось пройти проверку безопасности. Попробуйте ещё раз.',
    rate_limited: 'Сейчас слишком много заявок. Попробуйте через минуту.',
    closed: 'Регистрация на\u00A0встречу завершена.',
    full: 'Регистрация закрыта: все места заняты.',
    default: 'Не\u00A0удалось отправить заявку. Попробуйте ещё раз или напишите Аиде.'
  };

  const endpoint = form.dataset.endpoint || '';
  const siteKey = form.dataset.turnstileSitekey || '';
  const submitButton = document.getElementById('registration-submit');
  const statusElement = document.getElementById('registration-status');
  const statusBox = statusElement.parentElement;
  const successPanel = document.getElementById('registration-success');

  let turnstileToken = '';
  let widgetId = null;
  let isSubmitting = false;
  let isCaptchaStatus = false;
  let statusClearTimer = null;

  function setStatus(message, isError = false) {
    clearTimeout(statusClearTimer);
    isCaptchaStatus = false;

    if (message) {
      statusElement.textContent = message;
      statusElement.classList.toggle('form-status--error', isError);
      statusBox.classList.add('is-visible');
      return;
    }

    // Текст остаётся на экране, пока блок плавно сворачивается
    statusBox.classList.remove('is-visible');
    statusClearTimer = setTimeout(() => {
      statusElement.textContent = '';
      statusElement.classList.remove('form-status--error');
    }, STATUS_TRANSITION_MS);
  }

  function setCaptchaStatus(message) {
    setStatus(message, true);
    isCaptchaStatus = true;
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
        if (isCaptchaStatus) setStatus('');
      },
      'expired-callback': () => {
        turnstileToken = '';
      },
      'error-callback': () => {
        turnstileToken = '';
        setCaptchaStatus(ERROR_MESSAGES.captcha);
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
      setCaptchaStatus('Подождите, идёт проверка безопасности, и\u00A0нажмите кнопку ещё раз.');
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
