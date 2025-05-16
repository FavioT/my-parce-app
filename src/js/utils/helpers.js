export const PAGE_NAME = 'Herrajes Oeste';

export const PAGE_DESCRIPTION = 'Herrajes Oeste - La mejor calidad en herrajes para la construcción y la industria.';

export const BASE_API_URL = 'http://127.0.0.1:8000/api/v1';

export const CLIENT_DOMAIN = 'herrajesoeste.com';

export const FACEBOOK_PAGE = 'ttps://www.facebook.com/p/Herrajes-Oeste-srl-100046424304077';

export const INSTAGRAM_PAGE = 'https://www.instagram.com/herrajesoestesrl/';

export const SOCIAL_MEDIA_ICONS = [
    {
        id: 'instagram',
        iconUrl: new URL(
            './../../assets/images/insta-logo.png',
            import.meta.url
        ).pathname,
        link: INSTAGRAM_PAGE
    },
    {
        id: 'facebook',
        iconUrl: new URL(
            './../../assets/images/fb-logo.png',
            import.meta.url
        ).pathname,
        link: FACEBOOK_PAGE
    }
];

// ToDo: Quitar esto de alguna manera.
export const homeCatalogTemplate = ({ id, name, slug, icon, type, capitalized_name, icon_url }) => `
    <li>
        <div class="catalog-card">
            <figure class="catalog-card-icon">
                <img data-product-filter="${id}" data-filter-type="${type}_id" src="${icon_url}" width="40" height="40" loading="lazy" alt="${icon}" title=${capitalized_name}">
            </figure>
            <h3 data-product-filter="${id}" data-filter-type="${type}_id" class="catalog-card-title">${capitalized_name}</h3>
        </div>
    </li>
`;

export const createOverlay = () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.setAttribute('data-overlay', '');

    const $mobileNav = document.querySelector('[data-navbar-mobile]');
    $mobileNav.insertAdjacentElement('beforebegin', overlay);

    return overlay;
};

export const createSocialMediaIcons = () => {
    const $main = document.querySelector('main');
    const container = document.createElement('div');

    SOCIAL_MEDIA_ICONS.forEach(({ id, iconUrl, link }) => {
        const anchor = document.createElement('a');
        const classname = `${id}-btn`;
        anchor.classList.add(...['social-btn', classname]);
        anchor.setAttribute('href', link);
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('title', id);

        const image = document.createElement('img');
        image.setAttribute('src', iconUrl);
        image.setAttribute('alt', `icono ${id}`);
        image.setAttribute('title', id);

        anchor.append(image);
        container.append(anchor);
    });

    $main.insertAdjacentHTML('afterend', container.innerHTML);
};