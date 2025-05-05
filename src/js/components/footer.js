import '../../css/layout/footer.css';
import { PAGE_NAME } from '../utils/helpers';

const data = [
    { label: 'Dirección:', content: ['Matienzo 1275'], type: 'text' },
    { label: 'Horarios:', content: ['Lunes a Viernes: 8 a 16 hrs.', 'Sábados: 8 a 12 hrs.'], type: 'text' },
    { label: 'Teléfono:', content: ['+5493414565614'], type: 'link', hrefPrefix: 'tel:' },
    { label: 'Email:', content: ['matienzo@herrajesoeste.com'], type: 'link', hrefPrefix: 'mailto:' },
    { label: 'Facebook:', content: ['Herrajes Oeste SRL'], type: 'link', hrefPrefix: 'https://www.facebook.com/p/Herrajes-Oeste-srl-100046424304077' },
    { label: 'Instagram:', content: ['@‌herrajesoestesrl'], type: 'link', hrefPrefix: 'https://www.instagram.com/herrajesoestesrl/#' },
    { label: 'LinkedIn:', content: ['Herrajes Oeste'], type: 'link', hrefPrefix: 'https://www.linkedin.com/company/herrajes-oeste' }
];

const links = [
    { label: 'Inicio', link: '/' }, 
    { label: 'Productos', link: '/productos.html' },
    { label: 'Contacto', link: '/contacto.html' },
    { label: 'Novedades', link: '/novedades.html' },
];

export class Footer {
    logoUrl = 'logo-light.webp';

    createLogo() {
        const link = document.createElement('a');
        link.classList.add('logo');
        link.href = '/';

        const imageUrl = new URL(
            '../../assets/images/logo-light.webp',
            import.meta.url
        );

        const image = document.createElement('img');
        image.src = imageUrl.pathname;
        image.width = 200;
        image.height = 50;
        image.alt = `${PAGE_NAME} Logo`;
        image.title = PAGE_NAME;

        link.appendChild(image);
        return link;
    }

    createContactSection() {
        const section = document.createElement('div');
        section.classList.add('footer-brand');

        section.appendChild(this.createLogo());

        data.forEach(item => {
            const wrapper = document.createElement('div');
            wrapper.classList.add('wrapper');

            const span = document.createElement('span');
            span.classList.add('span');
            span.textContent = item.label;
            wrapper.appendChild(span);

            const contentWrapper = document.createElement('div');
            contentWrapper.classList.add('address-wrapper');

            item.content.forEach(content => {
                if (item.type === 'text') {
                    const address = document.createElement('address');
                    address.classList.add('address');
                    address.textContent = content;
                    contentWrapper.appendChild(address);
                } else if (item.type === 'link') {
                    const link = document.createElement('a');
                    link.classList.add('footer-link');
                    link.href = item.hrefPrefix + content;
                    link.textContent = content;
                    link.target = '_blank';
                    contentWrapper.appendChild(link);
                }
            });

            wrapper.appendChild(contentWrapper);
            section.appendChild(wrapper);
        });

        return section;
    }

    createLinksSection() {
        const footerList = document.createElement('ul');
        footerList.classList.add('footer-list');

        const textItem = document.createElement('li');
        const title = document.createElement('p');
        title.classList.add('footer-list-title');
        title.textContent = 'Enlaces';

        textItem.appendChild(title);
        footerList.appendChild(textItem);

        links.forEach(item => {
            const { label, link } = item;
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.classList.add('footer-link');
            anchor.href = link;
            anchor.textContent = label;

            listItem.appendChild(anchor);
            footerList.appendChild(listItem);
        });

        return footerList;
    }

    createWrapper() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('footer-section');

        const container = document.createElement('div');
        container.classList.add(...['footer-container', 'footer-grid']);

        container.appendChild(this.createContactSection());
        container.appendChild(this.createLinksSection());

        wrapper.appendChild(container);
        return wrapper;
    }

    render(parentElement) {
        const footer = document.createElement('footer');
        footer.className = 'footer';
        footer.appendChild(this.createWrapper());
        parentElement.appendChild(footer);
    }
}
