// Mobile nav toggle
const toolbar = document.querySelector('.toolbar');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  const isOpen = toolbar.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav after clicking a link
document.querySelectorAll('.toolbar__nav a').forEach(link => {
  link.addEventListener('click', () => {
    toolbar.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================
// PROJECT MODAL
// ============================================
const projects = {
  'life-through-water': {
    category: 'MSc Thesis — with the National Museum of Denmark',
    title: 'Life Through Water',
    description: "Life Through Water is an interactive museum installation about Nordhavn and the transformation of harbor baths through time. The project was part of my master's thesis in collaboration with the National Museum of Denmark, and features embodied interactions, multisensory cues and an engaging narrative. The installation is a shared experience for multiple people, and takes place inside a remodeled caravan designed with a sauna interior. It was exhibited as part of a larger exhibition, and will be displayed around Copenhagen for the next two years.",
    tags: ['Interaction Design', 'Exhibition Design', 'Embodied Interaction', 'Multisensory'],
    media: [
      { type: 'video', src: 'assets/video/life-through-water-trailer.mp4', poster: 'assets/img/life-through-water/front.jpg' },
      { type: 'image', src: 'assets/img/life-through-water/front.jpg', alt: 'The caravan installation exterior, painted with a Nordhavn map graphic' },
      { type: 'image', src: 'assets/img/life-through-water/screenshot-1.jpg', alt: 'Projected footage of a diver wrapping the interior walls of the caravan' },
      { type: 'image', src: 'assets/img/life-through-water/screenshot-2.jpg', alt: 'Visitor interacting with a projected scene using a wooden object' },
      { type: 'image', src: 'assets/img/life-through-water/screenshot-3.jpg', alt: 'The caravan installation on-site as part of the exhibition' },
      { type: 'image', src: 'assets/img/life-through-water/screenshot-4.jpg', alt: 'The Myths & Bricks info point sign next to the caravan' }
    ]
  }
};

const modal = document.getElementById('projectModal');
const modalGallery = document.getElementById('modalGallery');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTags = document.getElementById('modalTags');
let lastFocused = null;

function openProject(id) {
  const data = projects[id];
  if (!data) return;

  modalGallery.innerHTML = data.media.map(item => {
    if (item.type === 'video') {
      return `<video src="${item.src}" poster="${item.poster}" controls preload="metadata"></video>`;
    }
    return `<img src="${item.src}" alt="${item.alt}" loading="lazy">`;
  }).join('');

  modalCategory.textContent = data.category;
  modalTitle.textContent = data.title;
  modalDesc.textContent = data.description;
  modalTags.innerHTML = data.tags.map(t => `<span>${t}</span>`).join('');

  lastFocused = document.activeElement;
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal__close').focus();
}

function closeProject() {
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  const video = modalGallery.querySelector('video');
  if (video) video.pause();
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll('.frame[data-project]').forEach(frame => {
  frame.addEventListener('click', () => openProject(frame.dataset.project));
});

modal.querySelectorAll('[data-close]').forEach(el => {
  el.addEventListener('click', closeProject);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
    closeProject();
  }
});
