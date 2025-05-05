// ToDo: Crear clase base para reutilizar métodos
// ToDo: Renombrar métodos
export class MinimalCard {
    CLIENT_DOMAIN = 'herrajesoeste.com';

    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.imageUrl = data.image_url;
        this.subtitle = data.subtitle;
    }

    getPriceBox() {
        return  `    
            <div class="price-box">
                <p class="price">${this.subtitle}</p>
            </div>
        `;
    }

    render(animationDelay = '0ms') {
        const card = document.createElement('div');
        card.classList.add('showcase');
        card.style.animationDelay = animationDelay;
    
        card.innerHTML = `
            <div class="showcase-banner img-holder">
                <img src="${this.imageUrl}" alt="${this.title}" title="${this.title}" class="product-img default" loading="lazy" width="300" />
            </div>
            <div class="showcase-content">
                <h3 class="showcase-title">
                    <a href="/producto.html?id=${this.id}" class="card-link">${this.title}</a>
                </h3>
                ${this.getPriceBox()}
            </div>`;
    
        return card;
      }
}