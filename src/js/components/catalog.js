import { ApiService } from '../services/apiService';
import { EventManager } from '../utils/eventmanager';
import { 
    BASE_API_URL,
    homeCatalogTemplate,
} from '../utils/helpers';
import { Component } from './component';

const mockRequest = [
    {
        "id": 29,
        "name": "Muebles",
        "slug": "muebles",
        "icon": "muebles.png",
        "image": null,
        "type": "category",
        "capitalized_name": "Muebles",
        "icon_url": "https://www.herrajesoeste.com/assets/images/categories/muebles.png"
    },
    {
        "id": 1,
        "name": "Hogar",
        "slug": "hogar",
        "icon": "hogar.png",
        "image": null,
        "type": "category",
        "capitalized_name": "Hogar",
        "icon_url": "https://www.herrajesoeste.com/assets/images/categories/hogar.png"
    },
    {
        "id": 62,
        "name": "Obra",
        "slug": "obra",
        "icon": "obra.png",
        "image": null,
        "type": "category",
        "capitalized_name": "Obra",
        "icon_url": "https://www.herrajesoeste.com/assets/images/categories/obra.png"
    },
];

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
        /*this.apiService.fetchData([], (response) => {
            console.log(this.element);
            console.log(response);
        });*/

        const catalogGridList = document.createElement('ul');
        catalogGridList.classList.add('catalog-grid-list');
        catalogGridList.setAttribute('data-category-grid-list', '');

        mockRequest.forEach((element) => this.gridTemplate += homeCatalogTemplate(element));
        catalogGridList.innerHTML = this.gridTemplate;
        this.element.append(catalogGridList);

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