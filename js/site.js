// Shared site script: nav toggle for mobile menu.
// Loaded on every page; safe even if elements are missing.
(function () {
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', function () {
    menu.classList.toggle('open');
  });
})();
