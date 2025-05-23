import { LocalStorageManager } from '../services/local-storage-manager';

// Singleton y Observer Design Pattern for Shopping Cart
class ShoppingCart {
    constructor() {
        this.observers = [];
        this.storage = new LocalStorageManager();
        this.items = Object.values(this.storage.getAllItems());
        this.overlay = document.querySelector('[data-overlay]');
        this.updateBadgeCounter();

        if (ShoppingCart.instance) {
            return ShoppingCart.instance;
        }
        ShoppingCart.instance = this;
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify() {
        this.observers.forEach(observer => observer.update(this.items));
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

    addItem(productData) {
        this.storage.addItem(`product-${productData.id}`, productData);
        this.items.push(productData);
        this.updateBadgeCounter();
        this.notify();
    }   

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.storage.removeItem(`product-${productId}`);
        this.updateBadgeCounter();
        this.notify();
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    clearCart() {
        this.items = [];
        this.updateBadgeCounter();
        this.notify();
    }

    getItems() {
        return this.items;
    }

    getItem(productId) {
        return this.items.find(item => item.id === productId);
    }

    openShoppingCartPanel(event) {
        const { target } = event.target.dataset;
        const $sidebarPanel = document.querySelector(`#${target}`);
        
        if ($sidebarPanel) {
            $sidebarPanel.classList.toggle('active');
        }
    }

    createHeaderButton() {
        const button = document.createElement('button');
        button.className = 'icon-btn mis-a has-state';
        button.ariaPressed = 'false';
        button.ariaLabel = 'Mostrar el contenido del carrito';
        button.setAttribute('data-side-bar-toggler', '');
        button.setAttribute('data-target', 'cart-panel-sidebar');
        button.addEventListener('click', (event) => this.openShoppingCartPanel(event));

        const icon = document.createElement('span');
        icon.className = 'material-symbols-outlined';
        icon.ariaHidden = 'true';
        icon.textContent = 'shopping_cart';

        const badge = document.createElement('span');
        badge.className = 'btn-badge';
        badge.setAttribute('data-cart-counter-budget', '');
        badge.style.display = 'none';

        button.append(icon);
        button.append(badge);

        return button;
    }
}

export default ShoppingCart;

// Example usage
// const cart = ShoppingCart.getInstance();
// cart.addItem({ id: 1, name: 'Apple', price: 0.5, quantity: 3 });
// cart.addItem({ id: 2, name: 'Banana', price: 0.3, quantity: 5 });
// console.log(cart.getItems());
// console.log('Total Price:', cart.getTotalPrice());
// cart.removeItem(1);
// console.log(cart.getItems());
// cart.clearCart();
// console.log(cart.getItems());