const product = [
    { name: 'apple', price: 50 },
    { name: 'lemon', price: 60 },
    { name: 'banana', price: 30 },
    { name: 'mango', price: 100 },
    { name: 'ananas', price: 150 }
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
      const {name} = this.items[i];

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

        for (const {price, quantity} of items) {
            total += price * quantity;
        }
        return total;
    },
    increaseQuantity() { },
    decreaseQuantity() { },
};

console.log(cart.getItems());
cart.addProduct({name: 'apple', price: 50 });
cart.addProduct({name: 'lemon', price: 60 });
cart.addProduct({name: 'banana', price: 30 });
cart.addProduct({name: 'mango', price: 100 });
cart.addProduct({name: 'ananas', price: 150});
cart.addProduct({name: 'ananas', price: 150});
cart.addProduct({name: 'ananas', price: 150});

cart.removeProduct('lemon');
console.table(cart.getItems());

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

// cart.clear();
// console.log(cart.getItems());

console.log('Total: ', cart.countTotalPrice());
