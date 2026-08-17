(function () {
  document.querySelectorAll('[data-criticality-switcher]').forEach((root) => {
    const chips = root.querySelectorAll('.criticality-switcher__chip');
    const imgs = root.querySelectorAll('.criticality-switcher__img');
    const caption = root.querySelector('.criticality-switcher__caption');
    if (!chips.length || !imgs.length || !caption) return;

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const level = chip.getAttribute('data-level');

        chips.forEach((c) => {
          const active = c === chip;
          c.classList.toggle('is-active', active);
          c.setAttribute('aria-pressed', String(active));
        });

        imgs.forEach((img) => {
          img.style.display = img.getAttribute('data-level') === level ? '' : 'none';
        });

        const key = `projects.recomendacoes.solution.switcher.${level}Caption`;
        caption.setAttribute('data-i18n', key);
        if (window.i18n) caption.textContent = window.i18n.t(key);
      });
    });
  });
})();
