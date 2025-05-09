import { HeaderBuilder } from './components/header.builder';
import { HomeCatalogBuilder } from './components/home-catalog.builder';
import { 
    setSuperiorBanner,
    setVideoBanner,
    setInferiorBanner,
} from './utils/helpers';
import { SearchInput } from './utils/searchInput';
import { Carousel } from './components/carousel';
import { HomeLatestGridFactory } from './components/home-latest-grid.factory';
import { Footer } from './components/footer';

const navbarItems = [
    {
        label: 'Inicio',
        link: '/',
        icon: 'home',
        show: true,
    },
    {
        label: 'Productos',
        link: './productos.html',
        icon: 'inventory_2',
        show: true,
    },
    {
        label: 'Contacto',
        link: './contacto.html',
        icon: 'shopping_cart',
        show: true,
    },
    {
        label: 'Novedades',
        link: './blog.html',
        icon: 'campaign',
        show: true,
    }
];

// ToDo: Refactorizar creación de banners, ver que patrón se puede aplicar para no repetir código.
// ToDo: Implentar patrón de diseño observer
document.addEventListener("DOMContentLoaded", () => {
    const header = new HeaderBuilder('[data-header]', navbarItems);
    header.setLogo().createNavbar(navbarItems).createMobileNavBar(navbarItems).addShoppingCartButton();

    setSuperiorBanner();

    const homeCatalog = new HomeCatalogBuilder('[data-catalog-section]');
    homeCatalog.setTitle().loadItems().setOnClickEvent();

    const search = new SearchInput();
    search.mount('[data-products-catalog]').setKeydownEvent();

    const factory = new HomeLatestGridFactory();
    const homeProducts = factory.createGrid('latest-products');
    homeProducts.loadItems();

    setVideoBanner();

    const carousel = new Carousel('.brands-wrapper', '.carousel', { autoPlay: true, autoPlayInterval: 1500 });

    const homeNews = factory.createGrid('latest-news');
    homeNews.loadItems();

    setInferiorBanner();

    const footer = new Footer();
    footer.render(document.body);
});