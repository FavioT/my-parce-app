// Factory Design Pattern to create image and video banners
export class BannerFactory {
    static create({ type, assetPath, selector }) {
        const container = document.createElement('div');
        if (type === 'image') {
            container.classList.add('img-container');
            container.style.backgroundImage = `url(${assetPath.pathname})`;
        } else if (type === 'video') {
            container.classList.add('video-container');
            const video = document.createElement('video');
            video.classList.add('video-bg');
            video.autoplay = true;
            video.loop = true;
            video.muted = true;

            const source = document.createElement('source');
            source.src = assetPath;
            source.type = 'video/mp4';
            source.textContent = 'Your browser does not support the video tag.';

            video.append(source);
            container.append(video);
        }
        const $target = document.querySelector(selector);
        $target.append(container);
    }
}