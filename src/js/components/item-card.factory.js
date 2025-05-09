import { MinimalCard } from './minimal-card';
import { PurchaseCard } from './purchase-card';

// Factory Design Pattern for creating different types of item cards
export class ItemCardFactory {
    createCard(type, data) {
        switch (type) {
            case 'product':
                return new PurchaseCard(data);
            case 'post':
                return new MinimalCard(data);
            default:
                throw new Error('Unknown card type');
        }
    }
}