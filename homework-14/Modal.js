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
    this.overlay.classList.remove('overlay-showed');
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initClose() {
    const closeBtn = this.modal.querySelector('.modal-close-button');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            this.close();
        });
    }


    this.overlay.addEventListener('click', () => {
      this.overlay.classList.remove('overlay-showed');
      this.close();
  })
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