// =====================================================
// THEME TOGGLE. dark / light mode
// =====================================================

const themeToggle = document.getElementById('themeToggle');
const htmlEl      = document.documentElement;

// On page load — restore saved preference
const savedTheme = localStorage.getItem('oberih-theme');
if (savedTheme) {
  htmlEl.setAttribute('data-theme', savedTheme);
}

// On button click — switch theme
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';

    htmlEl.setAttribute('data-theme', next);
    localStorage.setItem('oberih-theme', next);
  });
}