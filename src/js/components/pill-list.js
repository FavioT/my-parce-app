import { ApiService } from '../services/apiService';
import { BASE_API_URL } from '../utils/helpers';

export class PillList {
    pillsContainer = null;

    constructor(element) {
        this.element = element;
        this.apiService = new ApiService(`${BASE_API_URL}/categories/tags`);
    }

    render() {
        this.apiService.fetchData([], (response) => {
            const fetchedCategories = response?.data ?? [];
            
            if (!fetchedCategories.length) {
                return;
            }

            const pillsContainer = document.createElement('div');
            pillsContainer.classList.add('tag-list');
            pillsContainer.setAttribute('data-category-tag-list', '');

            for (const category of fetchedCategories) {
                const categoryLink = document.createElement('a');
                categoryLink.setAttribute('href', `/productos.html?category_id=${category.id}`);
                categoryLink.setAttribute('id', `categoryId-${category.id}`);
                categoryLink.className = 'badge-btn body-medium has-state';
                categoryLink.innerText = category.capitalized_name ?? category.name;

                pillsContainer.appendChild(categoryLink);
            }

            this.element.append(pillsContainer);
        });
    }
}