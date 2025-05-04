export class Carousel {
    constructor(wrapperSelector, carouselSelector, options = {}) {
        this.brandsWrapper = document.querySelector(wrapperSelector);
        this.carousel = document.querySelector(carouselSelector);
        this.firstCardWidth = this.carousel.querySelector('.carousel-item').offsetWidth;
        this.arrowButtons = document.querySelectorAll(`${wrapperSelector} i`);
        this.carouselChildren = [...this.carousel.children];
        this.cardPerView = Math.round(this.carousel.offsetWidth / this.firstCardWidth);
        this.isDragging = false;
        this.startX = 0;
        this.startScrollLeft = 0;
        this.timeoutId = null;
        this.isAutoPlay = options.autoPlay || true;
        this.autoPlayInterval = options.autoPlayInterval || 1500;

        this.init();
    }

    init() {
        this.cloneCards();
        this.setupEventListeners();
        this.autoPlay();
    }

    cloneCards() {
        // Clonar las tarjetas al inicio y al final para el desplazamiento infinito
        this.carouselChildren.slice(-this.cardPerView).reverse().forEach(card => {
            this.carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
        });

        this.carouselChildren.slice(0, this.cardPerView).forEach(card => {
            this.carousel.insertAdjacentHTML('beforeend', card.outerHTML);
        });

        this.carousel.classList.add('no-transition');
        this.carousel.scrollLeft = this.carousel.offsetWidth;
        this.carousel.classList.remove('no-transition');
    }

    setupEventListeners() {
        // Botones de navegación
        this.arrowButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.carousel.scrollLeft += btn.id === 'left' ? -this.firstCardWidth : this.firstCardWidth;
            });
        });

        // Eventos de arrastre
        this.carousel.addEventListener('mousedown', this.dragStart.bind(this));
        this.carousel.addEventListener('mousemove', this.dragging.bind(this));
        document.addEventListener('mouseup', this.dragStop.bind(this));

        // Scroll infinito
        this.carousel.addEventListener('scroll', this.infiniteScroll.bind(this));

        // Pausar y reanudar autoplay al pasar el mouse
        this.brandsWrapper.addEventListener('mouseenter', () => clearTimeout(this.timeoutId));
        this.brandsWrapper.addEventListener('mouseleave', this.autoPlay.bind(this));

        // Agregar link a proveedores
        this.carouselChildren.forEach(element => {
            element.addEventListener('click', (event) => {
                const filterValue = event.currentTarget.dataset.brandTag;
                if (filterValue) {
                    window.location.href = `./productos.html?tag_id=${filterValue}`;                
                }
            });
        });
    }

    dragStart(evt) {
        this.isDragging = true;
        this.carousel.classList.add('dragging');
        this.startX = evt.pageX;
        this.startScrollLeft = this.carousel.scrollLeft;
    }

    dragging(evt) {
        if (!this.isDragging) return;
        this.carousel.scrollLeft = this.startScrollLeft - (evt.pageX - this.startX);
    }

    dragStop() {
        this.isDragging = false;
        this.carousel.classList.remove('dragging');
    }

    infiniteScroll() {
        if (this.carousel.scrollLeft === 0) {
            this.carousel.classList.add('no-transition');
            this.carousel.scrollLeft = this.carousel.scrollWidth - (2 * this.carousel.offsetWidth);
            this.carousel.classList.remove('no-transition');
        } else if (Math.ceil(this.carousel.scrollLeft) === this.carousel.scrollWidth - this.carousel.offsetWidth) {
            this.carousel.classList.add('no-transition');
            this.carousel.scrollLeft = this.carousel.offsetWidth;
            this.carousel.classList.remove('no-transition');
        }

        clearTimeout(this.timeoutId);

        if (!this.brandsWrapper.matches(':hover')) {
            this.autoPlay();
        }
    }

    autoPlay() {
        if (window.innerWidth < 800 || !this.isAutoPlay) return;
        this.timeoutId = setTimeout(() => this.carousel.scrollLeft += this.firstCardWidth, this.autoPlayInterval);
    }
}
