import { Header } from './components/header';

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
    const header = new Header("[data-header]");
    header.setLogo();
    header.createNavbar(navbarItems);
});