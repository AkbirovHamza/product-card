export class Modal {

  constructor(modalId, buttonId) {

    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');

    this.closeBtn = this.modal.querySelector('.modal-close-button');

    this.handler = () => {
      this.close();
    };

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
  }

  isOpen() {

    return this.modal.classList.contains('modal-showed');
  }

  #initClose() {

    this.closeBtn.addEventListener('click', this.handler);
    this.overlay.addEventListener('click', this.handler);
  }

  #initOpen(buttonId) {

    const openButton = document.getElementById(buttonId);

    openButton.addEventListener('click', () => {
      this.open();
    });
  }

}