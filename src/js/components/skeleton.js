import { Component } from './component';

export class Skeleton extends Component {
    $skeletonTemplate = `
        <div class="showcase skeleton-card">
            <div class="showcase-banner skeleton"></div>
        </div>
    `;

    constructor(selector) {
        super(selector);
    }

    init() {
        const gridList = document.createElement('div');
        gridList.classList.add('product-grid');
        gridList.innerHTML = this.$skeletonTemplate.repeat(10);
        this.element.innerHTML = gridList.innerHTML;
    }

    remove() {
        this.element.remove();
    }
}