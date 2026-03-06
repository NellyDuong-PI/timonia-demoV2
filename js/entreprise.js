// ─── ENTREPRISE PAGE LOGIC ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  setupForm('formDemo', 'successDemo', 'demo');
  setupNavBurger();
});

function openModal(name) {
  var map = { demo: 'modalDemo' };
  var el  = document.getElementById(map[name]);
  if (el) {
    el.hidden = false;
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(name) {
  var map = { demo: 'modalDemo' };
  var el  = document.getElementById(map[name]);
  if (el) {
    el.hidden = true;
    document.body.style.overflow = '';
  }
}

function setupForm(formId, successId, modalName) {
  var form    = document.getElementById(formId);
  var success = document.getElementById(successId);
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    success.hidden = false;
    setTimeout(function () {
      closeModal(modalName);
      form.style.display = '';
      success.hidden = true;
      form.reset();
    }, 3000);
  });
}

function setupNavBurger() {
  var burger = document.getElementById('navBurger');
  var mobile = document.getElementById('navMobile');
  if (burger && mobile) {
    burger.addEventListener('click', function () {
      mobile.classList.toggle('open');
    });
  }
}
