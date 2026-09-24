document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const siteNav = document.getElementById('site-nav');

  if (!menuBtn || !siteNav) return;

  menuBtn.addEventListener('click', function () {
    const isOpen = siteNav.classList.contains('open');
    siteNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
  });

  // Tutup menu saat klik link (mobile)
  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (siteNav.classList.contains('open')) {
        siteNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
