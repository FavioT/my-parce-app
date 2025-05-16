import { SidebarPanel } from './sidebar-panel';
import '../../css/layout/sidebar.css';
import ShoppingCart from './shopping-cart.singleton';

export class CartPanelSidebar extends SidebarPanel {
  constructor(panelId) {
    super(panelId);
    this.cart = new ShoppingCart();
    this.cart.subscribe(this);
    this.content = null;    
  }

  createHTML() {
    const panel = super.createHTML('shopping_cart', 'Carrito');
    panel.setAttribute('data-cart-side-bar', '');

    console.log(this.storage.getAllItems());

    const extraHTML = `
      <div class="side-bar-content" data-cart-content>
        <div class="product-showcase">
          <h3 class="showcase-heading">El carrito de compras está vacío</h3>
        </div>
      </div>
      <div class="side-bar-actions">
        <button class="btn btn-secondary label-large has-state" data-cart-content-clear disabled style="cursor: not-allowed;">
          Limpiar
        </button>
        <button class="btn btn-ws label-large has-state" data-side-bar-toggler data-cart-confirm data-target="cart-panel-sidebar" disabled style="cursor: not-allowed;">
          Confirmar Pedido
        </button>
      </div>
    `;
    panel.querySelector('.title-wrapper').insertAdjacentHTML('afterend', extraHTML);

    this.content = panel.querySelector('[data-cart-content]');
    return panel;
  }

  update(items) {
    // Renderiza los productos en el panel
    if (!this.content) {
      this.content = this.panel?.querySelector?.('[data-cart-content]');
      if (!this.content) return;
    } 
    if (!items.length) {
        this.content.innerHTML = `
            <div class="product-showcase">
                <h3 class="showcase-heading">El carrito de compras está vacío</h3>
            </div>
        `;
        return;
    }
    this.content.innerHTML = `
        <div class="product-showcase">
            ${items.map(item => `
                <div class="cart-item">
                    <span>${item.name}</span>
                    <span>${item.price} x ${item.quantity}</span>
                </div>
            `).join('')}
        </div>
    `;
  }

  initEvents() {
    super.initEvents();
    this.totalPriceEl = this.panel.querySelector('[data-cart-total-price]');
    this.clearBtn = this.panel.querySelector('[data-cart-content-clear]');
    if (this.clearBtn) {
      this.clearBtn.addEventListener('click', () => this.clearCart());
    }
  }

  updateTotal(price) {
    this.totalPriceEl.textContent = price;
  }

  clearCart() {
    const content = this.panel.querySelector('[data-cart-content]');
    content.innerHTML = '';
    this.updateTotal('$ 0,00');
  }
}
  