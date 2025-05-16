// Javascript
import { HeaderBuilder } from './components/header.builder';
import { HomeCatalogBuilder } from './components/home-catalog.builder';
import { 
    createOverlay,
    PAGE_NAME,
    createSocialMediaIcons,
} from './utils/helpers';
import { SearchInput } from './utils/searchInput';
import { Carousel } from './components/carousel';
import { HomeLatestGridFactory } from './components/home-latest-grid.factory';
import { Footer } from './components/footer';
import { SidebarFactory } from './components/sidebar.factory';
import { BannerFactory } from './utils/banner.factory';

// CSS
import '../css/layout/overlay.css';

// ToDo: Implentar patrón de diseño observer
// ToDo: Quitar este listener para poder correr el proyecto en app de android
// ToDo: Agregar meta tags
document.addEventListener("DOMContentLoaded", () => {
    const header = new HeaderBuilder('[data-header]', window.location.pathname);
    header
        .setLogo()
        .createNavbar()
        .createMobileNavBar()
        .addShoppingCartButton();

    const homeCatalog = new HomeCatalogBuilder('[data-catalog-section]');
    homeCatalog.setTitle().loadItems().setOnClickEvent();

    const search = new SearchInput();
    search.mount('[data-products-catalog]').setKeydownEvent();

    const factory = new HomeLatestGridFactory();
    const homeProducts = factory.createGrid('latest-products');
    homeProducts.loadItems();

    new Carousel('.brands-wrapper', '.carousel', { autoPlay: true, autoPlayInterval: 1500 });

    const homeNews = factory.createGrid('latest-news');
    homeNews.loadItems();

    const footer = new Footer();
    footer.render(document.body);

    createOverlay();
    SidebarFactory.create('cart-panel-sidebar', 'cart');

    // Change document title
    document.title = PAGE_NAME;

    createSocialMediaIcons();

    BannerFactory.create({
        type: 'image',
        assetPath: new URL('../assets/images/superior-banner-image.webp', import.meta.url),
        selector: '[data-main-banner-superior]'
    });
    BannerFactory.create({
        type: 'video',
        assetPath: new URL('../assets/media/home-banner.mp4', import.meta.url),
        selector: '[data-video-banner]'
    });
    BannerFactory.create({
        type: 'image',
        assetPath: new URL('../assets/images/inferior-banner-image.webp', import.meta.url),
        selector: '[data-main-banner-inferior]'
    });
});