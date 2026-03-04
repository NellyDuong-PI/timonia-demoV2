// ─── ENTREPRISE PAGE LOGIC ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  setupForm('formDemo', 'successDemo', 'demo');
});

function openModal(name) {
  const map = { demo: 'modalDemo' };
  const el  = document.getElementById(map[name]);
  if (el) {
    el.hidden = false;
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(name) {
  const map = { demo: 'modalDemo' };
  const el  = document.getElementById(map[name]);
  if (el) {
    el.hidden = true;
    document.body.style.overflow = '';
  }
}

function setupForm(formId, successId, modalName) {
  const form    = document.getElementById(formId);
  const success = document.getElementById(successId);
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
