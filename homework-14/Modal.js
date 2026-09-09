export class Modal {
  constructor(modalId, buttonId) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.closeHandler = null;
    this.overlayHandler = null;
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
    closeBtn.removeEventListener('click', this.closeHandler);

    this.overlay.removeEventListener('click', this.overlayHandler);

    this.closeHandler = null;
    this.overlayHandler = null;
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initClose() {
    const closeBtn = this.modal.querySelector('.modal-close-button');

    this.closeHandler = () => {
      this.close();
    };
    closeBtn.addEventListener('click', this.closeHandler);

    this.overlayHandler = () => {
      document.querySelectorAll('.modal-showed').forEach(modal => {
        modal.classList.remove('modal-showed');
      });
      this.overlay.classList.remove('overlay-showed');
    };
    this.overlay.addEventListener('click', this.overlayHandler);
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