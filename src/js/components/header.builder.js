import { Component } from './component';
import { PAGE_NAME } from '../utils/helpers';
import '../../css/layout/mobile-navbar.css';

// Simple Builder Design Pattern
export class HeaderBuilder extends Component {
    constructor(selector) {
        super(selector);
    }
    
    createNavbar(navbarItems) {
        let $navbar = document.createElement('navbar');
        $navbar.className = 'navbar';
        $navbar.setAttribute('data-navbar-desktop', '');
        $navbar.setAttribute('data-item-active', 'Inicio');

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

        $navbar.append(list);
        this.element.append($navbar);

        return this;
    }

    createMobileNavBar(navbarItems) {
        const $navbar = document.createElement('navbar');
        $navbar.classList.add('mobile-nav');
        $navbar.setAttribute('aria-label', 'primary');
        $navbar.setAttribute('data-navbar-mobile', '');
        $navbar.setAttribute('data-item-active', 'Inicio');

        const list = document.createElement('ul');
        list.className = 'nav-list';
        navbarItems.forEach(({ label, link, icon }) => {
            const li = document.createElement('li');
            li.classList.add('nav-item');

            const anchor = document.createElement('a');
            anchor.classList.add('nav-link');
            anchor.setAttribute('aria-current', 'true');
            anchor.setAttribute('href', link);

            const iconContainer = document.createElement('span');
            iconContainer.classList.add('item-icon');

            const iconItem = document.createElement('span');
            iconItem.classList.add('material-symbols-outlined');
            iconItem.setAttribute('aria-hidden', 'true');
            iconItem.textContent = icon;

            const iconLabel = document.createElement('span');
            iconLabel.classList.add('label-medium');
            iconLabel.textContent = label;

            iconContainer.append(iconItem);
            anchor.append(iconContainer);
            anchor.append(iconLabel);

            li.append(anchor);
            list.append(li);
        });

        $navbar.append(list);
        document.body.append($navbar);
        return this;
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
        image.alt = PAGE_NAME;
        image.title = PAGE_NAME;
        image.className = 'logo-light';
        image.width = '280';
        image.height = '48';

        imageContainer.append(image);
        this.element.append(imageContainer);

        return this;
    }

    addShoppingCartButton() {
        let button = document.createElement('button');
        button.className = 'icon-btn mis-a has-state';
        button.ariaPressed = 'false';
        button.ariaLabel = 'Mostrar el contenido del carrito';
        button.setAttribute('data-cart-panel-btn', '');
        button.setAttribute('data-side-bar-toggler', '');
        button.setAttribute('data-target', 'cart-panel-sidebar');

        let icon = document.createElement('span');
        icon.className = 'material-symbols-outlined';
        icon.ariaHidden = 'true';
        icon.textContent = 'shopping_cart';

        let badge = document.createElement('span');
        badge.className = 'btn-badge';
        badge.setAttribute('data-cart-counter-budget', '');
        badge.style.display = 'none';

        button.append(icon);
        button.append(badge);

        this.element.append(button);

        return this;
    }
}