const changeColorButton = document.querySelector('#changeColor');

changeColorButton.addEventListener('click', function() {
    changeColorButton.classList.toggle('button__red');
});