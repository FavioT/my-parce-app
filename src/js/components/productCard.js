export class ProductCard {
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
    }

    getProductInCart() {
        return window.localStorage.getItem(`${this.CLIENT_DOMAIN}-product-${this.id}`);
    }

    getBadge() {
        if (this.isPremium) {
            return '<p class="showcase-badge angle success">precio exclusivo</p>';
        }
        if (this.isNew) {
            return '<p class="showcase-badge angle primary">nuevo</p>';
        }
        return '';
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

    getAddToCartButton() {
        console.log(this.productStockQty);
        if (this.productStockQty > 0) {
            const productInCart = this.getProductInCart();
            const stateClass = productInCart ? 'saved' : 'removed';
            const label = productInCart ? 'Eliminar del carrito' : 'Agregar al carrito';
    
            return `
                <button
                    class="btn-action icon-btn ${stateClass}"
                    onclick="agregarProductoAlCarrito(this, '${this.id}')"
                    aria-label="${label}"
                    data-producto-id="${this.id}"
                >
                    <span class="material-symbols-outlined bookmark-add" aria-hidden="true">add_shopping_cart</span>
                    <span class="material-symbols-outlined bookmark" aria-hidden="true">shopping_cart</span>
                </button>`;
        }
    
        return `<button class="icon-btn"></button>`;
    }

    render(animationDelay = '0ms') {
        const card = document.createElement('div');
        card.classList.add('showcase');
        card.style.animationDelay = animationDelay;
    
        card.innerHTML = `
            ${this.getBadge()}
            <div class="showcase-banner img-holder">
                <img src="${this.imageUrl}" alt="${this.title}" title="${this.title}" class="product-img default" loading="lazy" width="300" />
            </div>
            <div class="showcase-content">
                <h3 class="showcase-title">
                    <a href="/producto.html?id=${this.id}" class="card-link">${this.title}</a>
                </h3>
                ${this.getPriceBox()}
                <div class="showcase-actions">
                ${this.getAddToCartButton()}
                </div>
            </div>`;
    
        return card;
      }
}