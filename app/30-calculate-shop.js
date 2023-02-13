// Створити калькулятор вартості продукту в залежності від ціни
// При змінні данних в інпуті №1 чи №2 автоматично має перераховуватися загальна вартість
// Завжди має відображатися валюта - гривня
// Загальна сума відображається з копійками (2 знаки після коми)
// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.
// Кольoрова підказка має змінювати своє значення при перетягувані повзунка.
// В інпуті №2 мін і мах поріг встановлюєте самостійно.
// При завантаженні сторінки скрип має автоматично розрахувати вартість на основі данних за замовчуванням які ви встановите в розмітці.

const form = document.querySelector('.form');
const amount = document.querySelector('.amount');
form.insertAdjacentHTML(
  'beforeend',
  `<div>Загальна вартість <code id="totalPrice"></code> $</div>`
);
const totalPrice = document.querySelector('#totalPrice');
console.log(totalPrice);

form.addEventListener('input', onChangePounds);

function onChangePounds(e) {
  const { price, quantity } = form.elements;

  amount.textContent = quantity.value;

  const sum = quantity.value * price.value;
  totalPrice.textContent = sum.toFixed(2);
}

window.addEventListener('DOMContentLoaded', onChangePounds);
