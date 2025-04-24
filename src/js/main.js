import { HeaderBuilder } from './components/header';
import { CatalogBuilder } from './components/catalog';
import { setSuperiorBanner } from './utils/helpers';
import { SearchInput } from './utils/searchInput';

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

    const catalog = new CatalogBuilder('[data-catalog-section]');
    catalog.setTitle().loadItems();

    const search = new SearchInput();
    search.mount('[data-products-catalog]');
});