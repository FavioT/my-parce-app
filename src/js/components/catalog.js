import { ApiService } from '../services/apiService';
import { EventManager } from '../utils/eventmanager';
import { 
    BASE_API_URL,
    homeCatalogTemplate,
} from '../utils/helpers';
import { Component } from './component';

// Simple Builder Pattern
export class CatalogBuilder extends Component {
    gridTemplate = '';

    constructor(selector) {
        super(selector);
        this.apiService = new ApiService(`${BASE_API_URL}/home-catalog`);
    }

    setTitle() {
        const container = document.createElement('div');
        container.classList.add('container');
        container.setAttribute('data-category-skeleton', '');

        const title = document.createElement('div');
        title.classList.add('catalog-section-title');
        title.textContent = 'Catálogo';

        container.append(title);
        this.element.append(container);

        return this;
    }

    loadItems() {
        this.apiService.fetchData([], (response) => {   
            if (!response.length) {
                return;
            }

            const catalogGridList = document.createElement('ul');
            catalogGridList.classList.add('catalog-grid-list');
            catalogGridList.setAttribute('data-category-grid-list', '');

            response.forEach((element) => this.gridTemplate += homeCatalogTemplate(element));
            catalogGridList.innerHTML = this.gridTemplate;
            this.element.append(catalogGridList);
        });

        return this;
    }

    setOnClickEvent() {
        const $catalogFiltersBtns = document.querySelectorAll('[data-product-filter]');
        EventManager.addEventOnElements($catalogFiltersBtns, 'click', (event) => {
            const { productFilter, filterType } = event.target.dataset;
            
            if (productFilter && filterType) {
                window.location.href = `/productos.html?${filterType}=${productFilter}`;
            }
        });
    }

} 