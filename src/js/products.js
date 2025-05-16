import { HeaderBuilder } from './components/header.builder';
// CSS
import '../css/layout/overlay.css';

document.addEventListener("DOMContentLoaded", () => {
    console.log('render products page');

    const header = new HeaderBuilder('[data-header]', window.location.pathname);
    header
        .setLogo()
        .createNavbar()
        .createMobileNavBar()
        .addShoppingCartButton();
});