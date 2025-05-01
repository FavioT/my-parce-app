import { Component } from './component';

export class Skeleton extends Component {
    skeletonCard = `
        <div class="showcase skeleton-card">
            <div class="showcase-banner skeleton"></div>
            <div class="showcase-content">
                <div class="showcase-title skeleton"></div>
                <div class="showcase-text skeleton"></div>
            </div>
        </div>
    `;

    getSkeletonCard(repeat) {
        return this.skeletonCard.repeat(repeat);
    }
}