export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay = true) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.#initOpen(buttonId);
    this.#initClose();
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
  }

  close() {
    this.modal.classList.remove('modal-showed');

  
    const openedModals = document.querySelectorAll('.modal-showed');

    if (openedModals.length === 0) {
      this.overlay.classList.remove('overlay-showed');
    }
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initClose() {
    // Крестик закрывает именно эту модалку
    const closeButton = this.modal.querySelector('.modal-close-button');

    if (closeButton) {
      closeButton.addEventListener('click', () => {
        this.close();
      });
    }

    // Оверлей закрывает любую открытую модалку
    this.overlay.addEventListener('click', () => {
      const openedModals = document.querySelectorAll('.modal-showed');

      openedModals.forEach((modal) => {
        modal.classList.remove('modal-showed');
      });

      this.overlay.classList.remove('overlay-showed');
    });
  }

  #initOpen(buttonId) {
    const openButton = document.getElementById(buttonId);

    if (openButton) {
      openButton.addEventListener('click', () => {
        this.open();
      });
    }
  }
}