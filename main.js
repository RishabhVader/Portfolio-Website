document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.menu .menu-item');
  const pages = document.querySelectorAll('.page');

  function setActiveLink(name) {
    links.forEach(a => {
      a.classList.toggle('is-active', a.dataset.link === name);
      a.toggleAttribute('aria-current', a.dataset.link === name);
    });
  }

  function showPage(name, pushHash = true) {
    const exists = [...pages].some(p => p.dataset.page === name);
    const target = exists ? name : 'home';

    pages.forEach(p => { p.hidden = (p.dataset.page !== target); });

    setActiveLink(target);

    if (pushHash) location.hash = target;
  }

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showPage(link.dataset.link);
    });
  });

  window.addEventListener('hashchange', () => {
    showPage((location.hash || '#home').slice(1), false);
  });

  showPage((location.hash || '#home').slice(1), false);
});
