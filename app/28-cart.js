const product = [
  { name: 'apple', price: 50 },
  { name: 'lemon', price: 60 },
  { name: 'banana', price: 30 },
  { name: 'mango', price: 100 },
  { name: 'ananas', price: 150 },
];

console.log(product);

const cart = {
  items: [],
  // return array items
  getItems() {
    return this.items;
  },
  // add products to cart
  addProduct(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },

  removeProduct(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { name } = this.items[i];

      if (productName === name) {
        console.log('нашли такой продукт ', productName);
        console.log('индекс: ', i);

        items.splice(i, 1);
      }
    }
  },
  clearCart() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity() {},
  decreaseQuantity() {},
};

console.log(cart.getItems());
cart.addProduct({ name: 'apple', price: 50 });
cart.addProduct({ name: 'lemon', price: 60 });
cart.addProduct({ name: 'banana', price: 30 });
cart.addProduct({ name: 'mango', price: 100 });
cart.addProduct({ name: 'ananas', price: 150 });
cart.addProduct({ name: 'ananas', price: 150 });
cart.addProduct({ name: 'ananas', price: 150 });

cart.removeProduct('lemon');
console.table(cart.getItems());

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

// cart.clear();
// console.log(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

//--------------------------------------------------------
// const instruments = [
//   {
//     id: 1,
//     img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
//     name: 'Молоток',
//     price: 150,
//   },
//   {
//     id: 2,
//     img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
//     name: 'Перфоратор',
//     price: 3000,
//   },
//   {
//     id: 3,
//     img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
//     name: 'Рівень',
//     price: 2000,
//   },
// ];
// const basket = [];
// const wish = [];

// const list = document.querySelector('.list');

// const markup = instruments.reduce(
//   (acc, instrument) =>
//     acc +
//     `<li class='js-item' data-id='${instrument.id}'>
// <img src="${instrument.img}" alt="${instrument.name}"  width="200px">
// <h2>${instrument.name}</h2>
// <p>${instrument.price}</p>
// <button class='js-add'>Add</button>
// <button class='js-wish'>Wish List</button>
// </li>`,
//   ''
// );
// list.insertAdjacentHTML('beforeend', markup);

// list.addEventListener('click', onItem);

// function getProduct(elem) {
//   const currentProduct = elem.closest('.js-item');
//   const currentId = Number(currentProduct.dataset.id);
//   const product = instruments.find(({ id }) => id === currentId);
//   return product;
// }

// function onItem(evt) {
//   if (evt.target.classList.contains('js-add')) {
//     const toBasket = getProduct(evt.target);
//     const id = Number(evt.target.closest('.js-item').dataset.id);
//     inArray(basket, id, toBasket, 'basket');
//   }

//   if (evt.target.classList.contains('js-wish')) {
//     const toWish = getProduct(evt.target);
//     const id = Number(evt.target.closest('.js-item').dataset.id);
//     inArray(wish, id, toWish, 'wish');
//   }
// }

// function inArray(arr, currentId, product, mod) {
//   product = { ...product };
//   const productInBasket = arr.find(({ id }) => id === currentId);

//   if (!productInBasket) {
//     if (mod === 'basket') {
//       product.qty = 1;
//       product.totalSum = product.price;
//     }
//     arr.push(product);
//   } else {
//     if (mod === 'basket') {
//       productInBasket.qty += 1;
//       productInBasket.totalSum = productInBasket.qty * productInBasket.price;
//     } else {
//       alert('Вже додано');
//     }
//   }
//   console.log(arr);
// }

const instruments = [
  {
    id: 1,
    img: 'https://www.usmagazine.com/wp-content/uploads/2022/09/Shop-the-Best-Makeup-Haircare-Skincare-and-Other-Beauty-Must-Haves-for-20222.jpg?w=1000&quality=86&strip=all',
    name: 'Milk Makeup Future Fluid Concealer',
    price: 150,
  },
  {
    id: 2,
    img: 'https://www.usmagazine.com/wp-content/uploads/2022/11/Shop-the-Best-Makeup-Haircare-Skincare-and-Other-Beauty-Must-Haves-for-2022-069.jpg?w=1200&quality=86&strip=all',
    name: 'Bliss Texture Takedown Skin Smoothing Body Butter',
    price: 3000,
  },
  {
    id: 3,
    img: 'https://www.usmagazine.com/wp-content/uploads/2022/09/best-beauty-products-2022-haircare-skincare-makeup-e.l.f.-Cosmetics-Halo-Glow-Liquid-Filter.jpg?w=1000&quality=86&strip=all',
    name: 'e.l.f. Cosmetic Halo Glow Liquid Filter',
    price: 2000,
  },
];
const basket = [];
const list = document.querySelector('.list');
const markup = instruments
  .map(
    ({ id, img, name, price }) => `
<li data-id='${id}'>
<img src="${img}" alt="${name}" width="300px">
    <h2>${name}</h2>
    <p>${price}</p>
    <div>
    <button class="js-add">Купити</button>
    <button class="js-favorite">В обране</button>
    <button class="js-delete" disabled>Delete</button>
    </div>
</li>`
  )
  .join('');
list.insertAdjacentHTML('beforeend', markup);
list.addEventListener('click', onClick);

function onClick(evt) {
  if (evt.target.classList.contains('js-add')) {
    const currentIdx = Number(evt.target.closest('li').dataset.id);
    console.log(currentIdx);
    const currentProduct = {
      ...instruments.find(({ id }) => id === currentIdx),
    };
    const inBasket = basket.find(({ id }) => id === currentIdx);
    if (!inBasket) {
      currentProduct.qty = 1;
      basket.push(currentProduct);
      console.dir(evt.target);
      evt.target.parentElement.lastElementChild.removeAttribute('disabled');
    } else {
      inBasket.qty += 1;
    }
    console.log(basket);
  }

  if (evt.target.classList.contains('js-delete')) {
    console.dir(evt.target.closest('li'));
    const currentIdx = Number(evt.target.closest('li').dataset.id);
    const idxInBasket = basket.findIndex(({ id }) => id === currentIdx);
    basket.splice(idxInBasket, 1);
    evt.target.setAttribute('disabled', true);
    console.log(basket);
  }
}
