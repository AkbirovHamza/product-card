import products from './arrayProducts.js';

const template = document.getElementById('cardTemplate');
const cardRow = document.getElementById('cardRow');

// ПУНКТ 5*: запрос количества карточек
function getCardCount() {
    let count = Number(prompt('Сколько карточек показать? (1–5)'));
    while (count < 1 || count > 5 || isNaN(count)) {
        alert('Только число от 1 до 5!');
        count = Number(prompt('Сколько карточек показать? (1–5)'));
    }
    return count || 5;
}

// ПУНКТ 5 
function renderCards(count) {
    cardRow.innerHTML = '';

    const items = products.slice(0, count);

    items.forEach((product) => {
        const clone = template.content.cloneNode(true);

        clone.querySelector('.card__image').src = product.image + '.png';
        clone.querySelector('.card__purpose').textContent = product.purpose;
        clone.querySelector('.card__name').textContent = product.name;
        clone.querySelector('.card__actions').textContent = product.actions;
        clone.querySelector('.price__figure').textContent = product.price + ' ₽';

        const ingredientsList = clone.querySelector('.card__ingredients');
        product.composition.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ingredientsList.appendChild(li);
        });

        cardRow.appendChild(clone);
    });
}

// ПУНКТ 4: reduce
const descriptionArray = products.reduce((acc, product) => {
    acc.push({
        name: product.name,
        description: product.actions
    });
    return acc;
}, []);

console.log('Описания товаров:', descriptionArray);

// === ЗАПУСК ===
const count = getCardCount();
renderCards(count);