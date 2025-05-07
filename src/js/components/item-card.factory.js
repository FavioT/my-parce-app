import { MaximumCard } from './maximum-card';
import { MinimalCard } from './minimal-card';

// Factory Design Pattern for creating different types of item cards
export class ItemCardFactory {
    createCard(type, data) {
        switch (type) {
            case 'product':
                return new MaximumCard(data);
            case 'post':
                return new MinimalCard(data);
            default:
                throw new Error('Unknown card type');
        }
    }
}