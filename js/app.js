// Speaker Database
// photo: null — показываются инициалы. Когда фото появится, укажите путь вида 'img/asel_mashanova.jpg'.
const speakersData = {
  'renata-nureyeva': {
    name: 'Рената Нуреева',
    position: 'CEO &amp; Founder, ProHunters',
    photo: 'img/renata_nureyeva.jpg',
    initials: 'РН',
    bio: '<p>Основатель агентства Recruitment &amp; Executive Search. ProHunters помогает среднему и крупному бизнесу находить ключевых специалистов и руководителей в Казахстане, Центральной Азии, ОАЭ, Европе, Африке и США.</p>',
    topic: null
  },
  'zaura-karakozhaeva': {
    name: 'Заура Каракожаева',
    position: 'Консультант-аналитик ProHunters · HR Advisor, NCOC',
    photo: 'img/zaura_karakozhaeva.jpg',
    initials: 'ЗК',
    bio: '<p>14 лет опыта в HR и Total Rewards. Эксперт по компенсациям, аналитике зарплат, грейдированию и бюджету персонала. Соавтор исследования «Рейтинг работодателей Казахстана».</p>',
    topic: null
  },
  'natalia-timofeeva': {
    name: 'Наталья Тимофеева',
    position: 'Внешний консультант ProHunters · ex-HRD KPMG и Исламского банка',
    photo: 'img/natalia_timofeeva.jpg',
    initials: 'НТ',
    bio: '<p>Более 15 лет в международных компаниях в IT, телекоме, финансах и консалтинге. Эксперт по вознаграждению, организационному проектированию и HR-аналитике. Лауреат премии «Хрустальная пирамида HR».</p>',
    topic: null
  },
  'asel-mashanova': {
    name: 'Асель Машанова',
    position: 'Сооснователь LULU Group',
    photo: null,
    initials: 'АМ',
    bio: '<p>Предпринимательница, создательница проектов LULU, Metabody, Meta Farm и Sau Apothecary на пересечении красоты, здоровья и осознанного образа жизни.</p>',
    topic: 'Карьера, амбиции и личный выбор. Тема выступления уточняется.'
  },
  'galiya-khamitova': {
    name: 'Галия Хамитова',
    position: 'Президент Erickson Coaching International Central Asia',
    photo: null,
    initials: 'ГХ',
    bio: '<p>Профессиональный коуч PCC ICF, ментор-коуч и коуч-супервизор с квалификациями ICF и EMCC. Более 6 000 часов индивидуального коучинга топ-руководителей.</p>',
    topic: null
  },
  'karashash-dzhuzeeva': {
    name: 'Карашаш Джузеева',
    position: 'Предпринимательница, издатель Vintage Kazakhstan',
    photo: null,
    initials: 'КД',
    bio: '<p>Медиаменеджер и общественный деятель. Основательница и издатель журнала Vintage Kazakhstan, развивающая предпринимательские и культурные проекты.</p>',
    topic: null
  },
  'ilyas-bakirov': {
    name: 'Ильяс Бакиров',
    position: 'Основатель и управляющий партнёр MKS KUSTO LOGISTICS',
    photo: null,
    initials: 'ИБ',
    bio: '<p>Предприниматель, учредитель BAKIROV CONSTRUCTION GROUP и член благотворительного фонда BIRLIK.</p>',
    topic: null
  },
  'maksat-zharasbaev': {
    name: 'Максат Жарасбаев',
    position: 'Генеральный директор Inditex Kazakhstan · Country Manager',
    photo: null,
    initials: 'МЖ',
    bio: '<p>Руководитель бизнеса Inditex в Казахстане с международным опытом в ритейле и управлении персоналом. Ранее занимал руководящие HR-позиции в международной структуре группы.</p>',
    topic: null
  },
  'moldir-seidan': {
    name: 'Молдир Сейдан',
    position: 'Основатель HR KEY · HR-предприниматель · Executive Coach',
    photo: null,
    initials: 'МС',
    bio: '<p>Более 15 лет в HR. Советник CEO Anor Bank, сертифицированный executive-коуч, автор подкастов о бизнесе. Пятикратная победительница премии HR Brand от HeadHunter Central Asia.</p>',
    topic: '«Эволюция карьеры: от амбиций к свободе»'
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
    invalid: 'Проверьте, что все поля заполнены корректно.',
    captcha: 'Не удалось пройти проверку безопасности. Попробуйте ещё раз.',
    rate_limited: 'Сейчас слишком много заявок. Попробуйте через минуту.',
    closed: 'Регистрация на встречу завершена.',
    full: 'Регистрация закрыта: все места заняты.',
    default: 'Не удалось отправить заявку. Попробуйте ещё раз или напишите Аиде.'
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
      setStatus('Подождите, идёт проверка безопасности, и нажмите кнопку ещё раз.', true);
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
