import { Modal } from './Modal.js';
import { Form } from './Form.js';

class Phone {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

class Watches extends Phone {
    constructor(brand, model, time) {
        super(brand, model);
        this.time = time;
    }
}

// === МОДАЛКА ===
const modal = new Modal('modal');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('registerBtn');

openBtn.addEventListener('click', () => {
    modal.open();
    overlay.classList.add('modal-showed');
});

// === ЗАКРЫТИЕ ПО ОВЕРЛЕЮ ===
overlay.addEventListener('click', () => {
    modal.close();
    overlay.classList.remove('modal-showed');
});

// === ФОРМА ===
const registerForm = new Form('registerForm');

registerForm.form.addEventListener('submit', function(event) {
    event.preventDefault();

    const data = registerForm.getValues();

    if (data.password !== data.confirmPassword) {
        alert('Пароли не совпадают');
        return;
    }

    if (!registerForm.isValid()) {
        alert('Заполните все поля');
        return;
    }

    const user = {
        firstName: data.firstName,
        lastName: data.lastName,
        birthDate: data.birthDate,
        login: data.login,
        password: data.password,
        createdOn: new Date()
    };

    console.log(user);

    modal.close();
    overlay.classList.remove('modal-showed');
    registerForm.reset();
});