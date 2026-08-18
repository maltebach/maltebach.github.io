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
