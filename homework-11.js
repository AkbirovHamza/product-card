//Уровень 1: пункт 4

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

//Уровень 2: пункт 5(1)

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


//Уровень 2: пункт 5(2)

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthDate = document.getElementById('birthDate').value;
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        return;
    }

    if (!registerForm.checkValidity()) {
        alert('Заполните все поля');
        return;
    }

    const user = {
        firstName,
        lastName,
        birthDate,
        login,
        password,
        createdOn: new Date()
    };

    console.log(user);

    modal.classList.remove('modal-showed');
    overlay.classList.remove('modal-showed');
});
