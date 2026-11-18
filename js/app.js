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
    bio: '<p>Предпринимательница, создательница проектов LULU, Metabody, Meta\u00A0Farm и\u00A0Sau\u00A0Apothecary на\u00A0пересечении красоты, здоровья и\u00A0осознанного образа жизни.</p>',
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
    position: 'Предпринимательница, издатель Vintage\u00A0Kazakhstan',
    photo: 'img/speakers/karashash-dzhuzeeva.jpg',
    initials: 'КД',
    bio: '<p>Медиаменеджер и\u00A0общественный деятель. Основательница и\u00A0издатель журнала Vintage\u00A0Kazakhstan, развивающая предпринимательские и\u00A0культурные проекты.</p>',
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
    bio: '<p>Более 15\u00A0лет в\u00A0HR. Советник CEO ANORBANK, сертифицированный <span class="nowrap">executive-коуч</span>, автор подкастов о\u00A0бизнесе. Пятикратная победительница премии «<span class="nowrap">HR-бренд</span> Центральная\u00A0Азия» от\u00A0HeadHunter.</p>',
    topic: '«Эволюция карьеры: от\u00A0амбиций к\u00A0свободе»'
  },
  'grigory-shanin': {
    name: 'Григорий Шанин',
    position: 'Ведущий и\u00A0модератор мероприятия.',
    photo: 'img/speakers/grigory-shanin.jpg',
    initials: 'ГШ',
    bio: '<p>Создаёт атмосферу живого диалога и\u00A0помогает гостям включаться в\u00A0обсуждение.</p>',
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
  document.querySelectorAll('.speaker-card').forEach(card => {
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

  track.replaceChildren(...avatars);

  // Три копии набора закрывают карточку любой ширины и делают цикл бесшовным
  for (let copy = 0; copy < 3; copy += 1) {
    avatars.forEach((avatar) => {
      const clone = avatar.cloneNode(true);

      // С клавиатуры доступен только первый набор, копии открываются мышью и касанием
      clone.tabIndex = -1;
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
  }

  track.addEventListener('click', (event) => {
    const avatar = event.target.closest('.bento-avatar');

    if (avatar) openModal(avatar.dataset.speaker);
  });

  carousel.classList.add('is-running');
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
