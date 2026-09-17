const modal = document.getElementById('takeHomeModal');
const openButtons = document.querySelectorAll('[data-open-message]');
const closeButtons = document.querySelectorAll('[data-close-message]');
let lastFocusedElement = null;

function openMessage() {
  lastFocusedElement = document.activeElement;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  window.setTimeout(() => modal.querySelector('[data-close-message]').focus(), 0);
}

function closeMessage() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

openButtons.forEach((button) => button.addEventListener('click', openMessage));
closeButtons.forEach((button) => button.addEventListener('click', closeMessage));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) closeMessage();
});


// Das Take-home Pop-up bei jedem neuen Seitenaufruf anzeigen.
window.addEventListener('DOMContentLoaded', () => {
  window.setTimeout(openMessage, 260);
});
