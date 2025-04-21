import { Component } from './component';
import { pageName } from '../../js/utils/helpers';

export class Header extends Component {
    constructor(selector) {
        super(selector);
    }
    
    setTitle(title) {
        this.render(`<h1>${title}</h1>`);
    }

    createNavbar(navbarItems) {
        let navbar = document.createElement('navbar');
        navbar.className = 'navbar';
        navbar.setAttribute('data-navbar-desktop', '');
        navbar.setAttribute('data-item-active', 'Inicio');

        let list = document.createElement('ul');
        list.className = 'navbar-list';
        navbarItems.forEach(({ label, link, show }) => {
            let li = document.createElement('li');
            li.setAttribute('data-navbar-link', '');

            let anchor = document.createElement('a');
            anchor.href = link;
            anchor.className = 'navbar-link title-small has-state';
            anchor.textContent = label;
            li.append(anchor);
            list.append(li);
        });

        navbar.append(list);
        this.element.append(navbar);
    }

    setLogo() {
        const imageUrl = new URL(
            './../../assets/images/logo-light.webp',
            import.meta.url
        );

        const imageContainer = document.createElement('a');
        imageContainer.className = 'logo';
        imageContainer.href = '/';

        const image = document.createElement('img');
        image.src = imageUrl.pathname;
        image.alt = pageName;
        image.title = pageName;
        image.className = 'logo-light';
        image.width = '280';
        image.height = '48';

        imageContainer.append(image);
        this.element.append(imageContainer);
    }

    addShoppingCartButton() {
        let button = document.createElement('button');
        button.className = 'icon-btn mis-a has-state';
        button.ariaPressed = 'false';
        button.ariaLabel = 'Mostrar el contenido del carrito';
        button.setAttribute('data-cart-panel-btn', '');
        button.setAttribute('data-side-bar-toggler', '');
        button.setAttribute('data-target', 'cart-panel-sidebar');
    }
}