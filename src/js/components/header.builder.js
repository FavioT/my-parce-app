import { Component } from './component';
import { PAGE_NAME } from '../utils/helpers';
import '../../css/layout/mobile-navbar.css';
import ShoppingCart from './shopping-cart.singleton';
import { NAVBAR_ITEMS } from '../utils/constants';

// Simple Builder Design Pattern
export class HeaderBuilder extends Component {
    constructor(selector, location) {
        super(selector);
        this.navbarItems = NAVBAR_ITEMS;
        this.location = location;
        this.shoppingCart = new ShoppingCart();
    }

    getLinkActive(link) {
       return link === this.location;
    }
    
    createNavbar() {
        let $navbar = document.createElement('navbar');
        $navbar.className = 'navbar';
        $navbar.setAttribute('data-navbar-desktop', '');
        $navbar.setAttribute('data-item-active', 'Inicio');

        let list = document.createElement('ul');
        list.className = 'navbar-list';
        this.navbarItems.forEach(({ label, link, show }) => {
            let li = document.createElement('li');
            li.setAttribute('data-navbar-link', '');

            let anchor = document.createElement('a');
            anchor.href = link;
            anchor.className = `navbar-link title-small has-state ${ this.getLinkActive(link) ? 'active' : '' }`;
            anchor.textContent = label;
            li.append(anchor);
            list.append(li);
        });

        $navbar.append(list);
        this.element.append($navbar);

        return this;
    }

    createMobileNavBar() {
        const $navbar = document.createElement('nav');
        $navbar.classList.add('mobile-nav');
        $navbar.setAttribute('aria-label', 'primary');
        $navbar.setAttribute('data-navbar-mobile', '');
        $navbar.setAttribute('data-item-active', 'Inicio');

        const list = document.createElement('ul');
        list.className = 'nav-list';
        this.navbarItems.forEach(({ label, link, icon }) => {
            const li = document.createElement('li');
            li.classList.add('nav-item');

            const anchor = document.createElement('a');
            anchor.classList.add('nav-link');
            anchor.setAttribute('aria-current', this.getLinkActive(link));
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
        document.querySelector('main').insertAdjacentElement('beforebegin', $navbar);

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
        const button = this.shoppingCart.createHeaderButton();
        this.element.append(button);

        return this;
    }
}