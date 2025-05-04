export const PAGE_NAME = 'Herrajes Oeste';

export const BASE_API_URL = 'http://127.0.0.1:8000/api/v1';

export const setSuperiorBanner = () => {
    const imageUrl = new URL(
        './../../assets/images/superior-banner-image.webp',
        import.meta.url
    );

    const container = document.createElement('div');
    container.classList.add('img-container');
    container.style.backgroundImage = `url(${imageUrl.pathname})`;

    const $superiorBanner = document.querySelector('[data-main-banner-superior]');
    $superiorBanner.append(container);
};

export const setVideoBanner = () => {
    const videoUrl = new URL(
        './../../assets/media/home-banner.mp4',
        import.meta.url
    );

    const container = document.createElement('div');
    container.classList.add('video-container');
    
    const video = document.createElement('video');
    video.classList.add('video-bg');
    video.autoplay = true;
    video.loop = true;
    video.muted = true;

    const source = document.createElement('source');
    source.src = videoUrl;
    source.type = 'video/mp4';
    source.textContent = 'Your browser does not support the video tag.';

    video.append(source);
    container.append(video);

    const $videoBanner = document.querySelector('[data-video-banner]');
    $videoBanner.append(container);
}

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