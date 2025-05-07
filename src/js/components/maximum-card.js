import { ShoppingCart } from './shopping-cart';

const shoppingCart = ShoppingCart.getInstance();
console.log(shoppingCart.getItems());

// ToDo: Crear clase base para reutilizar métodos
// ToDo: Renombrar métodos
export class MaximumCard {
    CLIENT_DOMAIN = 'herrajesoeste.com';

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
        this.shoppingCart = ShoppingCart.getInstance();
        console.log(this.shoppingCart.getItems()); 
    }

    getProductInCart() {
        return window.localStorage.getItem(`${this.CLIENT_DOMAIN}-product-${this.id}`);
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

            button.addEventListener('click', (event) => {
                const productId = event.currentTarget.getAttribute('data-producto-id');
                if (productId) {
                    this.shoppingCart.addItem({
                        id: productId,
                        name: this.title,
                        price: this.productPrice,
                        quantity: 1,
                    });
                }
                console.log(this.shoppingCart.getItems());
            });

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