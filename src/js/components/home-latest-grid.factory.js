import { HomeLatestNews } from './home-latest-news';
import { HomeLatestProducts } from './home-latest-products';

// Factory Design Pattern for creating different types of home latest grids
export class HomeLatestGridFactory {
    createGrid(type) {
        switch (type) {
            case 'latest-products':
                const latestProducts = document.querySelectorAll('[data-product-grid-section]')[0];
                return new HomeLatestProducts(latestProducts);
            case 'latest-news':
                const homeLatestNews = document.querySelectorAll('[data-product-grid-section]')[1];
                return new HomeLatestNews(homeLatestNews);
            default:
                throw new Error('Unknown grid type');
        }
    }
}