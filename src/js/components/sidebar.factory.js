import { CartPanelSidebar } from './cart-panel-sidebar';
import { MenuPanelSidebar } from './menu-panel-sidebar';
import { SidebarPanel } from './sidebar-panel';

// Factory design pattern
export class SidebarFactory {
    static create(panelId, type) {
        switch (type) {
            case 'cart':
                return new CartPanelSidebar(panelId);
            case 'menu':
                return new MenuPanelSidebar(panelId);
            default:
                return new SidebarPanel(panelId);
        }
    }
}