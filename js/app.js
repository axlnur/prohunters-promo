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

// Элемент, с которого открыли диалог: после закрытия фокус возвращается на него
let modalOpener = null;

// Ссылка на диалог: #имя_фамилия латиницей, например #zaura_karakozhaeva.
// Она строится из ключа speakersData, поэтому переименование ключа ломает отправленные ссылки.
function getSpeakerHash(speakerId) {
  return `#${speakerId.replace(/-/g, '_')}`;
}

function getSpeakerFromHash(hash) {
  try {
    const speakerId = decodeURIComponent(hash.slice(1)).trim().toLowerCase().replace(/_/g, '-');
    return Object.hasOwn(speakersData, speakerId) ? speakerId : null;
  } catch (error) {
    return null;
  }
}

function setPageHash(hash) {
  history.replaceState(history.state, '', `${location.pathname}${location.search}${hash}`);
}

// Open Modal Function
function openModal(speakerId) {
  const speaker = speakersData[speakerId];

  if (!speaker) return;

  if (!modal.classList.contains('active')) modalOpener = document.activeElement;
  setPageHash(getSpeakerHash(speakerId));

  // Populate content
  if (speaker.photo) {
    modalPhoto.classList.remove('is-loaded');
    modalPhoto.src = speaker.photo;
    if (modalPhoto.complete && modalPhoto.naturalWidth) modalPhoto.classList.add('is-loaded');
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

  if (getSpeakerFromHash(location.hash)) setPageHash('');

  if (modalOpener && modalOpener !== document.body && modalOpener.isConnected) {
    modalOpener.focus({ preventScroll: true });
  }
  modalOpener = null;
}

modalPhoto.addEventListener('load', () => modalPhoto.classList.add('is-loaded'));

// Полный портрет начинает загружаться при наведении, фокусе или касании, ещё до открытия диалога.
// Портрет Аиды больше нигде на странице не показывается, без этого он грузился бы только после клика.
const preloadedPhotos = new Set();

function preloadSpeakerPhoto(event) {
  const trigger = event.target instanceof Element ? event.target.closest('[data-speaker]') : null;
  const speaker = trigger ? speakersData[trigger.dataset.speaker] : null;

  if (!speaker || !speaker.photo || preloadedPhotos.has(speaker.photo)) return;
  preloadedPhotos.add(speaker.photo);
  new Image().src = speaker.photo;
}

['pointerover', 'focusin', 'touchstart'].forEach((type) => {
  document.addEventListener(type, preloadSpeakerPhoto, { passive: true });
});

// Ссылка на диалог открывает его при загрузке и при смене адреса на открытой странице
function openModalFromHash() {
  const speakerId = getSpeakerFromHash(location.hash);

  if (speakerId) openModal(speakerId);
}

window.addEventListener('hashchange', openModalFromHash);

// Event Listeners - Speaker Cards
document.addEventListener('DOMContentLoaded', () => {
  openModalFromHash();

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
    // Навигация по разделам не обрабатывает уже использованный Esc
    e.preventDefault();
    closeModal();
  }
});

// Prevent modal body scroll from closing
modal.querySelector('.modal-content').addEventListener('click', (e) => {
  e.stopPropagation();
});

// ============================================
// SECTION KEYBOARD NAVIGATION
// ============================================

// Tab и Shift+Tab переключают разделы по кругу. Enter переводит фокус на первый элемент раздела,
// дальше Tab идёт по элементам этого раздела, а после последнего переходит к следующему разделу.
// Esc возвращает фокус с элемента на его раздел.
document.addEventListener('DOMContentLoaded', () => {
  const sections = [...document.querySelectorAll('[data-nav-section]')];

  if (!sections.length) return;

  const ITEM_SELECTOR = 'a[href], button, input, select, textarea, iframe, [tabindex]';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Копии аватарок, поле-ловушка, скрытая форма и заблокированная кнопка сюда не попадают
  function getItems(section) {
    return [...section.querySelectorAll(ITEM_SELECTOR)].filter((item) => (
      item.tabIndex >= 0 && !item.disabled && item.getClientRects().length > 0
    ));
  }

  function goTo(section) {
    section.focus({ preventScroll: true });
    section.scrollIntoView({ block: 'start', behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }

  function getNeighbour(section, direction) {
    const index = sections.indexOf(section);
    return sections[(index + direction + sections.length) % sections.length];
  }

  // Если ни один раздел не в фокусе, соседний ищется от текущей позиции прокрутки
  function getSectionFromScroll(direction) {
    if (direction > 0) {
      return sections.find((section) => section.getBoundingClientRect().top > 1) || sections[0];
    }
    return sections.findLast((section) => section.getBoundingClientRect().top < -1) || sections[sections.length - 1];
  }

  function isBefore(first, second) {
    return Boolean(first.compareDocumentPosition(second) & Node.DOCUMENT_POSITION_FOLLOWING);
  }

  // Turnstile рисует проверку в закрытом shadow root, и скрипт не видит её iframe.
  // Если по пути лежит виджет, фокус переводит сам браузер: он умеет зайти внутрь.
  const turnstileWidget = document.getElementById('turnstile-widget');

  function crossesTurnstile(active, next, direction) {
    if (!turnstileWidget || !turnstileWidget.hasChildNodes()) return false;
    if (direction > 0) return isBefore(active, turnstileWidget) && (!next || isBefore(turnstileWidget, next));
    return isBefore(turnstileWidget, active) && (!next || isBefore(next, turnstileWidget));
  }

  // Из iframe виджета браузер возвращает фокус на body. Тогда обход продолжается от виджета
  // в разделе, где фокус был последним.
  let lastFocused = null;

  document.addEventListener('focusin', (event) => {
    lastFocused = event.target;
  });

  function getWidgetSection(active) {
    if (active !== document.body || !lastFocused || !lastFocused.isConnected || !turnstileWidget) return null;

    const section = lastFocused.closest('[data-nav-section]');
    return section && section.contains(turnstileWidget) ? section : null;
  }

  // Возвращает false, если переход нужно оставить браузеру
  function moveWithinSection(section, active, direction) {
    const items = getItems(section);
    const next = direction > 0
      ? items.find((item) => isBefore(active, item))
      : items.findLast((item) => isBefore(item, active));

    if (section.contains(turnstileWidget) && crossesTurnstile(active, next, direction)) return false;

    if (next) next.focus();
    else if (direction > 0) goTo(getNeighbour(section, 1));
    else section.focus({ preventScroll: true });
    return true;
  }

  document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented || event.ctrlKey || event.altKey || event.metaKey) return;

    // В диалоге спикера один элемент управления, фокус остаётся на нём
    if (modal.classList.contains('active')) {
      if (event.key === 'Tab') {
        event.preventDefault();
        modalClose.focus();
      }
      return;
    }

    const active = document.activeElement;
    const section = active ? active.closest('[data-nav-section]') : null;
    const isOnSection = section !== null && section === active;

    if (event.key === 'Tab') {
      const direction = event.shiftKey ? -1 : 1;
      const widgetSection = getWidgetSection(active);

      if (widgetSection) {
        if (moveWithinSection(widgetSection, turnstileWidget, direction)) event.preventDefault();
        return;
      }
      if (section && !isOnSection) {
        if (moveWithinSection(section, active, direction)) event.preventDefault();
        return;
      }

      event.preventDefault();
      goTo(section ? getNeighbour(section, direction) : getSectionFromScroll(direction));
      return;
    }

    if (event.key === 'Enter' && isOnSection) {
      const [firstItem] = getItems(section);

      if (firstItem) {
        event.preventDefault();
        firstItem.focus();
      }
      return;
    }

    if (event.key === 'Escape' && section && !isOnSection) {
      section.focus({ preventScroll: true });
    }
  });

  // После прокрутки колесом или пальцем Tab продолжает от видимой части страницы
  function releaseSection() {
    if (!sections.includes(document.activeElement)) return;
    lastFocused = null;
    document.activeElement.blur();
  }

  window.addEventListener('wheel', releaseSection, { passive: true });
  window.addEventListener('touchstart', releaseSection, { passive: true });

  // Ссылка на раздел переводит на него и фокус, чтобы Tab продолжал с нового места
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const target = document.getElementById(link.getAttribute('href').slice(1));

    if (sections.includes(target)) {
      link.addEventListener('click', () => target.focus({ preventScroll: true }));
    }
  });
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
  const CONTACT_REQUIRED = 'Укажите email или\u00A0телефон.';
  const PHONE_INVALID = 'Проверьте номер телефона.';
  const EMAIL_INVALID = 'Проверьте адрес email.';
  const NOTES = {
    email: 'Проверьте адрес email, например name@company.kz.',
    phone: 'Проверьте номер телефона, например +7\u00A0777\u00A0000\u201100\u201100.',
    suggestion: 'Возможно, вы имели в\u00A0виду '
  };
  // Те же правила, что в apps-script/Code.gs
  const EMAIL_LOCAL_PATTERN = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+$/i;
  const EMAIL_LABEL_PATTERN = /^(?!-)[\p{L}\p{N}-]{1,63}(?<!-)$/u;
  const EMAIL_TLD_PATTERN = /^(?:\p{L}{2,}|xn--[a-z0-9-]+)$/iu;
  // Опечатки ищутся только в популярных почтовых доменах: корпоративные адреса не трогаем
  const EMAIL_DOMAINS = {
    suggested: ['gmail.com', 'mail.ru', 'yandex.ru', 'yandex.kz', 'inbox.ru', 'outlook.com', 'hotmail.com', 'icloud.com', 'yahoo.com', 'rambler.ru'],
    other: ['ymail.com', 'mail.com', 'email.com', 'googlemail.com', 'mail.kz', 'list.ru', 'bk.ru', 'ya.ru', 'me.com', 'live.com', 'proton.me']
  };
  // Те же правила, что в apps-script/Code.gs
  const PHONE_PATTERN = /^\+?[\d\s()-]+$/;
  const PHONE_DIGITS = { min: 10, max: 15 };

  const endpoint = form.dataset.endpoint || '';
  const siteKey = form.dataset.turnstileSitekey || '';
  const submitButton = document.getElementById('registration-submit');
  const statusElement = document.getElementById('registration-status');
  const statusBox = statusElement.parentElement;
  const successPanel = document.getElementById('registration-success');
  const emailInput = document.getElementById('reg-email');
  const phoneInput = document.getElementById('reg-phone');
  const contactNote = document.getElementById('reg-contact-note');

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

  function isValidEmail(email) {
    const at = email.lastIndexOf('@');
    const local = email.slice(0, at);
    const labels = email.slice(at + 1).split('.');

    return at > 0 && email.length <= 254 && local.length <= 64 &&
      EMAIL_LOCAL_PATTERN.test(local) && !/^\.|\.\.|\.$/.test(local) &&
      labels.length >= 2 && labels.every((label) => EMAIL_LABEL_PATTERN.test(label)) &&
      EMAIL_TLD_PATTERN.test(labels[labels.length - 1]);
  }

  // Расстояние Дамерау — Левенштейна: перестановка соседних букв считается одной ошибкой
  function getEditDistance(a, b) {
    const rows = Array.from({ length: a.length + 1 }, (_, i) => [i, ...new Array(b.length).fill(0)]);

    for (let j = 1; j <= b.length; j += 1) rows[0][j] = j;
    for (let i = 1; i <= a.length; i += 1) {
      for (let j = 1; j <= b.length; j += 1) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;

        rows[i][j] = Math.min(rows[i - 1][j] + 1, rows[i][j - 1] + 1, rows[i - 1][j - 1] + cost);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
          rows[i][j] = Math.min(rows[i][j], rows[i - 2][j - 2] + 1);
        }
      }
    }
    return rows[a.length][b.length];
  }

  // gmial.com → gmail.com. Для коротких доменов допускается одна ошибка, для длинных две.
  function suggestEmail(email) {
    const at = email.lastIndexOf('@');
    const domain = email.slice(at + 1).toLowerCase();

    if (at < 1 || EMAIL_DOMAINS.suggested.includes(domain) || EMAIL_DOMAINS.other.includes(domain)) return '';

    const match = EMAIL_DOMAINS.suggested.find((known) => {
      const distance = getEditDistance(domain, known);
      return distance === 1 || (distance === 2 && known.length >= 9);
    });
    return match ? `${email.slice(0, at)}@${match}` : '';
  }

  // Номера с кодом +7 приводятся к виду +7 777 000-00-00, другие коды остаются как введены.
  // Первая 8 или 7 без плюса — привычный префикс, вместо неё подставляется +7.
  function formatPhone(value) {
    // Пробел в конце не срезается: он нужен, пока номер с другим кодом набирается
    const raw = value.trimStart();
    const digits = raw.replace(/\D/g, '');
    const hasPlus = raw.startsWith('+');

    if (hasPlus && digits && !digits.startsWith('7')) {
      return `+${raw.slice(1).replace(/[^\d\s()-]/g, '').replace(/\s+/g, ' ')}`;
    }
    if (!digits) return hasPlus ? '+' : '';

    const hasPrefix = hasPlus || digits.startsWith('7') || digits.startsWith('8');
    const national = (hasPrefix ? digits.slice(1) : digits).slice(0, 10);
    const groups = [
      [' ', national.slice(0, 3)],
      [' ', national.slice(3, 6)],
      ['-', national.slice(6, 8)],
      ['-', national.slice(8, 10)]
    ];

    return groups.reduce((phone, [separator, group]) => (group ? `${phone}${separator}${group}` : phone), '+7');
  }

  // «+7» без номера остаётся от подстановки и считается пустым полем
  function readPhone() {
    const phone = phoneInput.value.trim();
    return phone === '+' || phone === '+7' ? '' : phone;
  }

  function isValidPhone(phone) {
    const digits = phone.replace(/\D/g, '').length;

    if (!PHONE_PATTERN.test(phone)) return false;
    if (/^\+\s*7/.test(phone)) return digits === 11;
    return digits >= PHONE_DIGITS.min && digits <= PHONE_DIGITS.max;
  }

  // Номер форматируется при наборе в конце поля. Удаление и правка в середине не трогают
  // курсор, полный формат применяется при уходе из поля.
  function handlePhoneInput(event) {
    const type = event.inputType || '';
    const isDeleting = type.startsWith('delete');
    const isAtEnd = phoneInput.selectionStart === phoneInput.value.length;
    const isReplacement = !type || type === 'insertFromPaste' || type === 'insertReplacementText';

    if (!isDeleting && (isAtEnd || isReplacement)) {
      phoneInput.value = formatPhone(phoneInput.value);
    }
    updateContactValidity();
    handleContactInput(phoneInput);
  }

  function handlePhoneBlur() {
    phoneInput.value = readPhone() ? formatPhone(phoneInput.value) : '';
    updateContactValidity();
    showContactNote();
  }

  // Регистр важен только до @, домен приводится к строчным буквам
  function handleEmailBlur() {
    const email = emailInput.value.trim();
    const at = email.lastIndexOf('@');

    if (at > 0) emailInput.value = `${email.slice(0, at)}@${email.slice(at + 1).toLowerCase()}`;
    updateContactValidity();
    showContactNote();
  }

  // Браузер показывает эти подсказки при отправке так же, как для обязательных полей
  function updateContactValidity() {
    const email = emailInput.value.trim();
    const phone = readPhone();
    let emailMessage = '';

    if (!email && !phone) emailMessage = CONTACT_REQUIRED;
    else if (email && !isValidEmail(email)) emailMessage = EMAIL_INVALID;

    emailInput.setCustomValidity(emailMessage);
    phoneInput.setCustomValidity(phone && !isValidPhone(phone) ? PHONE_INVALID : '');
  }

  function hideContactNote() {
    contactNote.hidden = true;
    contactNote.replaceChildren();
    contactNote.classList.remove('form-note--suggestion');
  }

  function applyEmailSuggestion(suggestion) {
    emailInput.value = suggestion;
    hideContactNote();
    updateContactValidity();
    emailInput.focus();
  }

  // Ошибки показываются после ухода из поля, а не во время набора
  function showContactNote() {
    const email = emailInput.value.trim();
    const phone = readPhone();
    const isEmailWrong = Boolean(email) && !isValidEmail(email);
    const isPhoneWrong = Boolean(phone) && !isValidPhone(phone);
    const suggestion = email && !isEmailWrong ? suggestEmail(email) : '';

    let key = suggestion && `suggestion:${suggestion}`;

    if (isEmailWrong) key = 'email';
    else if (isPhoneWrong) key = 'phone';

    emailInput.setAttribute('aria-invalid', String(isEmailWrong));
    phoneInput.setAttribute('aria-invalid', String(isPhoneWrong));

    // Та же подсказка не перерисовывается: иначе клик по кнопке исправления потерялся бы
    if (!contactNote.hidden && contactNote.dataset.key === key) return;
    hideContactNote();
    contactNote.dataset.key = key;

    if (isEmailWrong || isPhoneWrong) {
      contactNote.textContent = isEmailWrong ? NOTES.email : NOTES.phone;
    } else if (suggestion) {
      const fix = document.createElement('button');

      fix.type = 'button';
      fix.className = 'form-note__fix';
      fix.textContent = suggestion;
      fix.addEventListener('click', () => applyEmailSuggestion(suggestion));
      contactNote.classList.add('form-note--suggestion');
      contactNote.append(NOTES.suggestion, fix, '?');
    } else {
      return;
    }
    contactNote.hidden = false;
  }

  function handleContactInput(input) {
    if (input.getAttribute('aria-invalid') === 'true') input.removeAttribute('aria-invalid');
    if (!contactNote.hidden && !contactNote.contains(document.activeElement)) hideContactNote();
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
    const email = String(data.get('email')).trim();
    const phone = readPhone() ? formatPhone(readPhone()) : '';

    if (!firstName || !lastName || !company || (!email && !phone)) {
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
        email,
        phone,
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

  emailInput.addEventListener('input', () => {
    updateContactValidity();
    handleContactInput(emailInput);
  });
  emailInput.addEventListener('blur', handleEmailBlur);
  phoneInput.addEventListener('input', handlePhoneInput);
  phoneInput.addEventListener('blur', handlePhoneBlur);
  updateContactValidity();

  if (ENDPOINT_PATTERN.test(endpoint) && siteKey) {
    loadTurnstile();
  }
});
