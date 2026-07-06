// ===== ПУНКТ 2 =====
const cardNum1 = document.querySelector('#cardNum1');
const changeColorCardBut = document.querySelector('#changeColorCard');
const firstCardColor = '#be0d0d';

changeColorCardBut.addEventListener('click', () => {
    cardNum1.style.backgroundColor = firstCardColor;
});

// ===== ПУНКТ 3 =====
const allCards = document.querySelectorAll('.card');
const changeColorCardsBut = document.querySelector('#changeColorCards');
const allCardsColor = '#0dc735';

changeColorCardsBut.addEventListener('click', () => {
    allCards.forEach((card) => {
        card.style.backgroundColor = allCardsColor;
    });
});

// ===== ПУНКТ 4 =====
const openGoogle = document.querySelector('#OpenGoogle');

openGoogle.addEventListener('click', () => {
    window.open('https://www.google.com/');
});

// ===== ПУНКТ 5 =====
const outputConsoleLog = document.querySelector('#outputConsoleLog');

outputConsoleLog.addEventListener('click', () => {
    outPutConsoleLog('Привет это мое ДЗ');
});

function outPutConsoleLog(message) {
    alert('ДЗ №6');
    console.log(message);
}

// ===== ПУНКТ 6 =====
const head = document.querySelector('#heading');

head.addEventListener('mouseenter', () => {
    console.log(head.textContent);
});

// ===== ПУНКТ 7 =====
const changeColorButton = document.querySelector('#changeColor');

changeColorButton.addEventListener('click', () => {
    changeColorButton.classList.toggle('button__red');
});