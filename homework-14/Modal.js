export class Modal {
  constructor(modalId, buttonId) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.closeHandler = null;
    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#initClose();
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');

    const closeBtn = this.modal.querySelector('.modal-close-button');
    if (closeBtn && this.closeHandler) {
      closeBtn.removeEventListener('click', this.closeHandler);
      this.closeHandler = null;
    }
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initClose() {
    const closeBtn = this.modal.querySelector('.modal-close-button');
    if (closeBtn) {
      this.closeHandler = () => {
        this.close();
      };
      closeBtn.addEventListener('click', this.closeHandler);
    }
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