import { SidebarPanel } from './sidebar-panel';

export class CartPanelSidebar extends SidebarPanel {
    createHTML() {
      const panel = super.createHTML();
      panel.setAttribute('data-cart-side-bar', '');
  
      const extraHTML = `
        <div class="side-bar-content" data-cart-content=""></div>
        <div class="side-bar-total">
          <span class="cart-total">Total:</span>
          <span class="cart-total-price" data-cart-total-price>$ 0,00</span>
        </div>
        <div class="side-bar-actions">
          <button class="btn clear-btn" data-cart-content-clear>Limpiar</button>
        </div>
      `;
      panel.querySelector('.side-bar-content').insertAdjacentHTML('afterend', extraHTML);
  
      return panel;
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
  