document.addEventListener('DOMContentLoaded', () => {
  const mobileNavigation = document.querySelector('.mobile-navigation');
  if (!mobileNavigation) return;
  mobileNavigation.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => { mobileNavigation.open = false; });
  });
});
