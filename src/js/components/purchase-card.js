import ShoppingCart from './shopping-cart.singleton';
import { LocalStorageManager } from '../services/local-storage-manager';
import { CLIENT_DOMAIN } from '../utils/helpers';
import { ApiService } from '../services/apiService';
import { BASE_API_URL } from '../utils/helpers';

// ToDo: Crear clase base para reutilizar métodos
// ToDo: Renombrar métodos
// ToDo: Ver si es realmente necesario guardar todo el objecto de producto en el localStorage o solo el id y la cantidad
// ToDo: Delegar responsabilidad de agregar items al carrito
export class PurchaseCard {
    constructor(data) {
        this.productStockQty = data.qty ?? 0;
        this.productPrice = data.formatted_price ?? 0.00;
        this.premiumPrice = data.premiumPrice ?? 0.00;
        this.id = data.id;
        this.title = data.name;
        this.productCode = data.code;
        this.image = data.image || data.fallback_image;
        this.imageUrl = data.image_url;
        this.isNew = Boolean(data.isNew);
        this.isPremium = Boolean(data.isPremium);
        this.shoppingCart = new ShoppingCart();
        this.storage = new LocalStorageManager(CLIENT_DOMAIN);
    }

    getProductInCart() {
        return this.storage.getItem(`product-${this.id}`);
    }

    getPriceBox() {
        return this.isPremium ? 
            `
                <div class="price-box">
                    <p class="price premium">$ ${this.premiumPrice}</p>
                    <p class="premium-label">club de beneficios</p>
                </div>
                <div class="price-box">
                    <p class="price regular">$ ${this.productPrice}</p>
                    <p class="regular-label">precio regular</p>
                </div>
            ` : 
            `
                <div class="price-box">
                    <p class="price">$ ${this.productPrice}</p>
                </div>
            `;
    }

    getBadge() {
        const badge = document.createElement('p');
        badge.classList.add(...['showcase-badge', 'angle']);
        
        if (this.isPremium) {
            badge.classList.add('success');
            badge.innerText = 'precio exclusivo';
        }
        if (this.isNew) {
            badge.classList.add('primary');
            badge.innerText = 'nuevo';
        }
        return badge;
    }

    getImage() {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add(...['showcase-banner', 'img-holder']);

        const image = document.createElement('img');
        image.setAttribute('src', this.imageUrl);
        image.setAttribute('alt', this.title);
        image.setAttribute('title', this.title);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.classList.add(...['product-img', 'default']);

        imageContainer.appendChild(image);
        return imageContainer;
    }

    // ToDo: Mover implementación
    getProductInfo(element) {
        const storedProduct = this.shoppingCart.getItem(Number(this.id));
        if (storedProduct) {
            this.shoppingCart.removeItem(storedProduct.id);
            element.classList.toggle('saved');
            element.classList.toggle('removed');
            return;
        }

        const apiService = new ApiService(`${BASE_API_URL}/products/${this.id}`);
        apiService.fetchData([], (response) => {
            const productData = { amount : 1, ...response.data };

            if (productData.hasOwnProperty('benefit') && parseInt(productData.benefit?.int_price) > 0) {
                productData.intPremiumPrice = productData.benefit.int_price;
            }

            this.shoppingCart.addItem(productData);
            element.classList.toggle('removed');
            element.classList.toggle('saved');

            // showSnackbarNotification('Producto agregado al carrito');

            //if (cartSidebarPanel) {
                // updateCartSidebarContent(savedProductId);

                // const cartSidebarPanelToggler = document.querySelector('[data-cart-panel-btn]');
                //
                // if (cartSidebarPanelToggler) {
                //     cartSidebarPanelToggler.click();
                // }
            // }

            // updateTotalInCart();
            // updateWhatsappBtn();
        });
    }

    getAddToCartButton() {
        const showcaseActions = document.createElement('div');
        showcaseActions.classList.add('showcase-actions');

        const button = document.createElement('button');
        button.classList.add('icon-btn');

        if (this.productStockQty > 0) {
            const productInCart = this.getProductInCart();
            const stateClass = productInCart ? 'saved' : 'removed';
            const label = productInCart ? 'Eliminar del carrito' : 'Agregar al carrito';

            button.classList.add(...['btn-action', stateClass]);
            button.setAttribute('aria-label', label);
            button.setAttribute('data-producto-id', this.id);

            button.addEventListener('click', (event) => this.getProductInfo(event.currentTarget));

            button.innerHTML = `
                <span class="material-symbols-outlined bookmark-add" aria-hidden="true">add_shopping_cart</span>
                <span class="material-symbols-outlined bookmark" aria-hidden="true">shopping_cart</span>
            `;
        }

        showcaseActions.appendChild(button);
        return showcaseActions;
    }

    createShowcase() {
        const showcase = document.createElement('div');
        showcase.classList.add('showcase-content');

        const title = document.createElement('h3');
        title.classList.add('showcase-title');

        const link = document.createElement('a');
        link.classList.add('card-link');
        link.setAttribute('href', `/producto.html?id=${this.id}`);
        link.textContent = this.title;

        title.appendChild(link);
        showcase.appendChild(title);
        showcase.innerHTML += this.getPriceBox();
        showcase.appendChild(this.getAddToCartButton());

        return showcase;
    }

    render(animationDelay = '0ms') {
        const card = document.createElement('div');
        card.classList.add('showcase');
        card.style.animationDelay = animationDelay;

        card.append(this.getBadge());
        card.append(this.getImage());
        card.append(this.createShowcase());
    
        return card;
      }
}