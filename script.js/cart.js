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
     },
    addProduct(product) {
        const { items } = this.items;

        for (const item of items) {
            console.log(item);
            if (item.name === product.name) {
                console.log(item);
                console.log('this product: product.name is');
                item.quatity += 1;
            }
        }
        const newProduct = {
            ...product,
            quantity: 1,
        }
        
     },
    removeProduct() { },
    clearCart() { },
    countTotalPrice() { },
    increaseQuantity() { },
    decreaseQuantity() { },
};
