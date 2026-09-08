import { Modal } from "./Modal.js";

const registrationModal = new Modal('registration-modal', 'registration-button');
const authModal = new Modal('auth-modal', 'auth-button');

const overlay = document.getElementById('overlay');

overlay.addEventListener('click', () => {
  document.querySelectorAll('.modal-showed').forEach(modal => {
    modal.classList.remove('modal-showed');
  });
  overlay.classList.remove('overlay-showed');
});