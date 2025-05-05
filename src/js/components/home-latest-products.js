import { ApiService } from '../services/apiService';
import { BASE_API_URL } from '../utils/helpers';
import { Skeleton } from './skeleton';
import { ItemCardFactory } from './item-card.factory';

// ToDo: Lograr funcionalidad de agregar/quitar productos al carrito, ocultar/mostrar icono correspondiente.
export class HomeLatestProducts {
    constructor(element) {
        this.element = element;
        this.apiService = new ApiService(`${BASE_API_URL}/products`);
        this.createContainers();
    }

    createContainers() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('product-main');
        wrapper.setAttribute('data-product-main-grid', '');

        const container = document.createElement('div');
        container.classList.add('container');
        
        container.append(wrapper);
        this.element.append(container);
    }

    loadItems() {
        const $productMain = this.element.querySelector('[data-product-main-grid]');

        const gridList = document.createElement('div');
        gridList.classList.add('product-grid');
        gridList.innerHTML = new Skeleton().getSkeletonCard(5);
        $productMain.append(gridList);

        this.apiService.fetchData([['latest', true]], (response) => {
            const products = response?.data;

            if (!products || !products.length) {
                return;
            }

            products.forEach((product, index) => {
                product.isNew = true;
                product.isPremium = product.hasOwnProperty('benefit') && parseInt(product.benefit?.price) > 0;
                product.premiumPrice = product.isPremium ? product.benefit?.formatted_price : '0.00';

                const factory = new ItemCardFactory();
                const productCard = factory.createCard('product', product);
                const renderedCard = productCard.render(`${100 * index}ms`);
                gridList.appendChild(renderedCard);
            });
        });

        $productMain.querySelectorAll('.skeleton-card').forEach(element => element.remove());

        const showMore = document.createElement('a');
        showMore.classList.add(...['btn', 'btn-secondary', 'label-large', 'has-state']);
        showMore.href = './productos.html';
        showMore.textContent = 'Ver más';

        $productMain.append(showMore);
    }
}