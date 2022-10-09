const product = [
    { name: 'apple', price: 50, },
    { name: 'lemon', price: 60, },
    { name: 'banana', price: 30, },
    { name: 'mango', price: 100, },
    { name: 'ananas', price: 150, } 
]

const cart = {
    items: [],
    getItems() {
        return this.items;
        console.log(getItems(product));
     },
    addProduct(product) { },
    removeProduct() { },
    clearCart() { },
    countTotalPrice() { },
    increaseQuantity() { },
    decreaseQuantity() { },
};
