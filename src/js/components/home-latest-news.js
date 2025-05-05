import { ApiService } from '../services/apiService';
import { BASE_API_URL } from '../utils/helpers';
import { Skeleton } from './skeleton';
import { ItemCardFactory } from './item-card.factory';

export class HomeLatestNews {
    constructor(element) {
        this.element = element;
        this.apiService = new ApiService(`${BASE_API_URL}/posts`);
        this.createContainers();
    }

    createContainers() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('product-main');
        wrapper.setAttribute('data-product-main-grid', '');

        const container = document.createElement('div');
        container.classList.add('container');

        const sectionTitle = document.createElement('div');
        sectionTitle.classList.add(...['catalog-section-title', 'news-title']);
        sectionTitle.textContent = 'Últimas Novedades';

        container.append(sectionTitle);
        container.append(wrapper);
        this.element.append(container);
    }

    loadItems() {
        const $productMain = this.element.querySelector('[data-product-main-grid]');

        const gridList = document.createElement('div');
        gridList.classList.add('product-grid');
        gridList.innerHTML = new Skeleton().getSkeletonCard(5);
        $productMain.append(gridList);

        this.apiService.fetchData([], (response) => {
            const blogPosts = response?.data;

            if (!blogPosts || !blogPosts.length) {
                return;
            }

            blogPosts.forEach((post, index) => {
                post.isNew = true;
                post.isPremium = post.hasOwnProperty('benefit') && parseInt(post.benefit?.price) > 0;
                post.premiumPrice = post.isPremium ? post.benefit?.formatted_price : '0.00';

                const factory = new ItemCardFactory();
                const postCard = factory.createCard('post', post);
                const renderedCard = postCard.render(`${100 * index}ms`);
                gridList.appendChild(renderedCard);
            });
        });

        $productMain.querySelectorAll('.skeleton-card').forEach(element => element.remove());

        const showMore = document.createElement('a');
        showMore.classList.add(...['btn', 'btn-primary', 'label-large', 'has-state']);
        showMore.href = './blog.html';
        showMore.textContent = 'Ir a novedades';

        $productMain.append(showMore);
    }

}