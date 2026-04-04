// =====================================================
// THEME TOGGLE. dark / light mode
// =====================================================

const themeToggle = document.getElementById('themeToggle');
const htmlEl      = document.documentElement;

// On page load. restore saved preference
const savedTheme = localStorage.getItem('oberih-theme');
if (savedTheme) {
  htmlEl.setAttribute('data-theme', savedTheme);
}

// On button click. switch theme
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';

    htmlEl.setAttribute('data-theme', next);
    localStorage.setItem('oberih-theme', next);
  });
}


  const hamburgerBtn   = document.getElementById('hamburgerBtn');
  const mobileNav      = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');
 
  hamburgerBtn.addEventListener('click', () => {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
 
  mobileNavClose.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
 
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
 
  const nav = document.querySelector('.main-nav');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 2px 20px rgba(0,0,0,0.08)'
      : 'none';
  });