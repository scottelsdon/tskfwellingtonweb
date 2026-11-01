// Shared site script: nav toggle for mobile menu, and hiding past dated events.
// Loaded on every page; safe even if elements are missing.
(function () {
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', function () {
    menu.classList.toggle('open');
  });
})();

// Hide events whose data-date (YYYY-MM-DD) has passed in NZ time; each stays listed until the end of its day.
(function () {
  var today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Pacific/Auckland' }).format(new Date());
  document.querySelectorAll('[data-date]').forEach(function (el) {
    if (el.getAttribute('data-date') < today) el.remove();
  });
})();
