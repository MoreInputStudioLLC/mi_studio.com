// More Input Studio — nav toggle (DRAFT)
(function () {
  var btn = document.querySelector('.hamburger');
  var panel = document.getElementById('navpanel');
  if (!btn || !panel) return;

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    panel.classList.toggle('open');
  });

  // click outside closes
  document.addEventListener('click', function (e) {
    if (!panel.contains(e.target) && !btn.contains(e.target)) {
      panel.classList.remove('open');
    }
  });

  // Esc closes
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') panel.classList.remove('open');
  });
})();
