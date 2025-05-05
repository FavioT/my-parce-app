import { ShoppingCard } from './shopping-card';
import { MinimalCard } from './minimal-card';

// Factory pattern for creating different types of item cards
export class ItemCardFactory {
    createCard(type, data) {
        switch (type) {
            case 'product':
                return new ShoppingCard(data);
            case 'post':
                return new MinimalCard(data);
            default:
                throw new Error('Unknown card type');
        }
    }
}