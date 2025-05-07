// Singleton Desing Pattern for Shopping Cart
export class ShoppingCart {
    constructor() {
        this.items = [];
    }

    static getInstance() {
        if (!ShoppingCart.instance) {
            ShoppingCart.instance = new ShoppingCart();
        }
        return ShoppingCart.instance;
    }

    updateBadgeCounter() {
        const $counter = document.querySelector('[data-cart-counter-budget]');
        if (!$counter) return;

        if (this.items.length > 0) {
            $counter.textContent = this.items.length;
            $counter.style.display = 'block';
        } else {
            $counter.style.display = 'none';
        }

    }

    addItem(item) {
        this.items.push(item);
        this.updateBadgeCounter();
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.updateBadgeCounter();
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    clearCart() {
        this.items = [];
    }

    getItems() {
        return this.items;
    }
}

// Example usage
const cart = ShoppingCart.getInstance();
cart.addItem({ id: 1, name: 'Apple', price: 0.5, quantity: 3 });
cart.addItem({ id: 2, name: 'Banana', price: 0.3, quantity: 5 });
// console.log(cart.getItems());
// console.log('Total Price:', cart.getTotalPrice());
// cart.removeItem(1);
// console.log(cart.getItems());
// cart.clearCart();
// console.log(cart.getItems());