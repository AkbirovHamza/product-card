import products from './arrayProducts.js';

const template = document.getElementById('cardTemplate');
const row1 = document.getElementById('cardRow1');
const row2 = document.getElementById('cardRow2');

function renderCards(count) {
    // Очищаем контейнеры
    row1.innerHTML = '';
    row2.innerHTML = '';

    const items = products.slice(0, count);

    items.forEach((product, index) => {
        const clone = template.content.cloneNode(true);

        clone.querySelector('.card__image').src = product.image || '';
        clone.querySelector('.card__image').alt = product.cardName;
        clone.querySelector('.card__purpose').textContent = product.cardPurpose;
        clone.querySelector('.card__name').textContent = product.cardName;
        clone.querySelector('.card__actions').textContent = product.cardActions;

        const ingredientsList = clone.querySelector('.card__ingredients');
        ingredientsList.innerHTML = '';
        product.composition.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ingredientsList.appendChild(li);
        });

        clone.querySelector('.price__figure').textContent = product.price + ' ₽';

        if (index < 3) {
            row1.appendChild(clone);
        } else {
            row2.appendChild(clone);
        }
    });
}
// === Пункт 5===
function getCardCount() {
    let count;
    while (true) {
        const input = prompt('Сколько карточек отобразить? (От 1 до 5)');
        if (input === null) {
            return 5;
        }
        count = Number(input);
        if (Number.isInteger(count) && count >= 1 && count <= 5) {
            return count;
        }
        alert('Введите число от 1 до 5!');
    }
}

// === Пункт 4: reduce ===
const descriptionMap = products.reduce((acc, product) => {
    acc[product.cardName] = product.cardActions;
    return acc;
}, {});
console.log('Описания товаров:', descriptionMap);

// === Запуск (пункт 5)===
const count = getCardCount();
renderCards(count);