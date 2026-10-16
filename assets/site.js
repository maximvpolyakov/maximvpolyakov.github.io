document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('animation-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const paused = document.body.classList.toggle('motion-paused');
    toggle.textContent = paused ? 'Resume motion' : 'Pause motion';
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.setAttribute('aria-label', paused ? 'Resume decorative cell animation' : 'Pause decorative cell animation');
  });
  document.querySelectorAll('.mobile-navigation nav a').forEach(link => {
    link.addEventListener('click', () => { const menu = document.querySelector('.mobile-navigation'); if (menu) menu.open = false; });
  });
});
