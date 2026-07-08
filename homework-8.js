// === Пункт 3 ===

const userInfo = {
    firstName: 'Hamza',
    lastName: 'Akbirov',
    age: 16,
    country: 'Russia',
    city: 'Kazan',
    mail: 'garden@gmail.com',
    job: 'Frontend Developer',
    position: "Student"
};

// === Пункт 4 ===

const carInfo = {
    brand: 'BMW',
    model: 'X1',
    year: 2022,
    carColor: 'white',
    transmission: 'automatic'
};

carInfo.owner = userInfo;


console.log(carInfo);

// === Пункт 5 ===

function checkingCarSpeed(carInfo) {
    if (carInfo.maxSpeed === undefined) {
        carInfo.maxSpeed = 300;
    }
}
 
checkingCarSpeed(carInfo);

// === Пункт 6 ===

function showUserInfo(userInfo, city) {
    console.log(userInfo[city]);
}

showUserInfo(carInfo, 'brand'); 

// === Пункт 7 ===

const productsName = ['bread', 'milk', 'butter', 'fruits', 'cake'];

// === Пункт 8 ===

const booksData = [
{
    name: 'Гарри Поттер',
    author: 'К. Роулинг',
    year: 1997,
    coverColor: 'Красный',
    genre: 'Фэнтези'
},
{
    name: 'Дюны',
    author: 'Френк Герберт',
    year: 1965,
    coverColor: 'желтый',
    genre: 'научная фантастика'
},
{
    name: 'Маленький принц',
    author: 'Антуан де Сент-Экзюпери',
    year: 1943,
    coverColor: 'синий',
    genre: 'философская сказка'
}];
booksData.push({
    name: '451 градус по Фаренгейту',
    author: 'Рэй Брэдбери',
    year: 1953,
    coverColor: 'оранжевый',
    genre: 'антиутопия'});

console.log(booksData);

// === Пункт 9 ===

const booksGarryPotter = [
{
    name: 'Гарри Поттер и философский камень',
    author: 'Дж. К. Роулинг',
    year: 1997,
    coverColor: 'Красный',
    genre: 'Фэнтези'
},
{
    name: 'Гарри Поттер и Узник Азкабана',
    author: 'Дж. К. Роулинг',
    year: 1999,
    coverColor: 'синий',
    genre: 'Фэнтези'
},
{
    name: 'Гарри Поттер и Кубок огня',
    author: 'Дж. К. Роулинг',
    year: 2000,
    coverColor: 'красный',
    genre: 'Фэнтези'
}];

const allBooks = [...booksData, ...booksGarryPotter];
console.log(allBooks);

// === Пункт 10 ===

const rareBooks = allBooks.map(function(book) {
    if (book.year > 2000) {
        book.isRare = true;
    } else {
        book.isRare = false;
    }
    return book;
});

console.log(rareBooks);