// Уровень 1: пункт 4
const form = document.getElementById('subscribeForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (email === '' || !email.includes('@')) {
        alert('Введите корректный email');
    } else {
        console.log({ email: email });
    }
});

// Уровень 2: пункт 5(1)
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('registerBtn');
const closeBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', function() {
    modal.classList.add('modal-showed');
    overlay.classList.add('modal-showed');
});

closeBtn.addEventListener('click', function() {
    modal.classList.remove('modal-showed');
    overlay.classList.remove('modal-showed');
});

overlay.addEventListener('click', function() {
    modal.classList.remove('modal-showed');
    overlay.classList.remove('modal-showed');
});

// Уровень 2: пункт 5(2) — с Object.fromEntries()
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('Форма отправлена');

    const formData = new FormData(registerForm);

    const user = Object.fromEntries(formData.entries());
    user.createdOn = new Date();

    console.log('Пароль:', user.password);
    console.log('Повтор:', user.confirmPassword);

    if (user.password !== user.confirmPassword) {
        alert('Пароли не совпадают');
        return;
    }

    if (!registerForm.checkValidity()) {
        alert('Заполните все поля');
        return;
    }

    console.log(user);

    modal.classList.remove('modal-showed');
    overlay.classList.remove('modal-showed');
});