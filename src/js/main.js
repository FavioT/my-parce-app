import { HeaderBuilder } from './components/header';
import { HomeCatalogBuilder } from './components/home-catalog';
import { 
    setSuperiorBanner,
    setVideoBanner, 
} from './utils/helpers';
import { SearchInput } from './utils/searchInput';
import { HomeProducts } from './components/home-products';
import { Carousel } from './components/carousel';

const navbarItems = [
    {
        label: 'Inicio',
        link: '/',
        show: true,
    },
    {
        label: 'Productos',
        link: './productos.html',
        show: true,
    },
    {
        label: 'Contacto',
        link: './contacto.html',
        show: true,
    },
    {
        label: 'Novedades',
        link: './blog.html',
        show: true,
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const header = new HeaderBuilder('[data-header]');
    header.setLogo().createNavbar(navbarItems).addShoppingCartButton();

    setSuperiorBanner();

    const homeCatalog = new HomeCatalogBuilder('[data-catalog-section]');
    homeCatalog.setTitle().loadItems().setOnClickEvent();

    const search = new SearchInput();
    search.mount('[data-products-catalog]').setKeydownEvent();

    const homeProducts = new HomeProducts('[data-product-grid-section]');
    homeProducts.loadProducts();

    setVideoBanner();

    const carousel = new Carousel('.brands-wrapper', '.carousel', { autoPlay: true, autoPlayInterval: 1500 });
});