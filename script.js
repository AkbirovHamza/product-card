


//  пункт 2 

const cardNum1 = document.querySelector('#cardNum1');
const changeColorCardBut = document.querySelector('#changeColorCard');
const red = '#be0d0d'




changeColorCardBut.addEventListener('click', function() {
    cardNum1.style.backgroundColor = red;
});


//  пункт 3

const allCards = document.querySelectorAll('.card');
const changeColorCardsBut = document.querySelector('#changeColorCards');
const green = '#0dc735'

changeColorCardsBut.addEventListener('click', function() {
    allCards.forEach(function(card) {
        card.style.backgroundColor = green;
    });
});


//  пункт 4

const OpenGoogle = document.querySelector('#OpenGoogle');

OpenGoogle.addEventListener('click', function() {
    window.open('https://www.google.com/');
});


//  пункт 5 

const outputConsoleLog = document.querySelector('#outputConsoleLog');

outputConsoleLog.addEventListener('click', function(){
    outPutConsoleLog('Привет это мое ДЗ')
})

function outPutConsoleLog(massage) {
    alert('ДЗ №6')
    console.log(massage)
} 





//  пункт 6

const head = document.querySelector('#heading');

head.addEventListener('mouseenter', function() {
    console.log(head.textContent)
});




//  пункт 7

const changeColorButton = document.querySelector('#changeColor');

changeColorButton.addEventListener('click', function() {
    changeColorButton.classList.toggle('button__red');
});