// === пункт 3 === 

function showWeather(city, temperature) {
    console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}
showWeather('Москве', 35);

// === пункт 4 === 

const SPEED_OF_LIGHT = 299792458;
function checkSpeed(speed) {
    if (speed > SPEED_OF_LIGHT) {
        console.log("Сверхсветовая скорость");
    }
    else if (speed < SPEED_OF_LIGHT) {
        console.log("Субсветовая скорость");
    }
    else {
        console.log("Скорость света");
    }
}

checkSpeed(299792458);

// === пункт 5 === 

const product__name = "Телефон";
const product__price = 50000;

function buyProduct(budget) {
    if (budget > product__price) {
        console.log(`${product__name} приобретен, Спасибо за покупку!`);
    }
    else {
        let difference = product__price - budget;
        console.log(`Вам не хватает ${difference}, пополните баланс`);
    }

}

buyProduct(40300);

// === пункт 6 === Функция на расчет скидки

function calculateDiscount(price, discount) {
    let difference = (price / 100) * discount;
    console.log(`${difference}`);
}

calculateDiscount(182000, 25);

// === пункт 7 === 

const myNameDog = "Bob";
const userName = "Aleksander"
const isAdult = true;