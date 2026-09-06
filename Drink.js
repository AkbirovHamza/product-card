// === Задание пункт 3

class Drink {
    #temperatureDrink;

    constructor(drinkName, volumeDrink, priceDrink) {
        this.drinkName = drinkName;
        this.volumeDrink = volumeDrink;
        this.priceDrink = priceDrink;
        this.#temperatureDrink = 25;
    };

    getInfo() {
        return `${this.drinkName}, ${this.volumeDrink}, ${this.priceDrink}`;
    };
    getTemperature() {
        return this.#temperatureDrink
    };
    setTemperature(newTemp) {
        if (Number.isFinite(newTemp)) {
            if (newTemp >= 0 && newTemp <= 100) {
            this.#temperatureDrink = newTemp;
            };
        };
    };
    prepareDrink() {
        console.log('Начало приготовления напитка');
        this.#temperatureDrink = 40;
        console.log('Напиток готов!');
    };
    serveDrink() {
        console.log(this.prepareDrink());
        return this.getTemperature();
    };
};

 
class Coffee extends Drink {
    constructor(drinkName, volumeDrink, priceDrink, typeGrains, typeMilk) {
        super(drinkName, volumeDrink, priceDrink);
        this.typeGrains = typeGrains;
        this.typeMilk = typeMilk;
    }
}
 
class Limonade extends Drink {
    constructor(drinkName, volumeDrink, priceDrink, amountWater, lemon) {
        super(drinkName, volumeDrink, priceDrink);
        this.amountWater = amountWater;
        this.lemon = lemon;
    }
}
 
class Tea extends Drink {
    constructor(drinkName, volumeDrink, priceDrink, teaHerb) {
        super(drinkName, volumeDrink, priceDrink);
        this.teaHerb = teaHerb;
    }
}
 
// === Задание пункт 4

class Cafe {
    constructor(nameCafe, locationCafe) {
        this.nameCafe = nameCafe;
        this.locationCafe = locationCafe;
    }

    getInfo() { 
        return `${this.nameCafe}, ${this.locationCafe}`;
    };
    orderDrink(drink) {
        console.log('Заказ принят, ожидайте!');
        drink.serveDrink();
        console.log('Напиток подан!');   
    }
};

const cafe = new Cafe('Zefir', 'Center');
const drink = new Coffee('Эспрессо', 0.5, 500, 'Типика', 'Топленое');

console.log(cafe.orderDrink(drink)); 

