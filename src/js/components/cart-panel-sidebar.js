import { SidebarPanel } from './sidebar-panel';
import '../../css/layout/sidebar.css';
import ShoppingCart from './shopping-cart.singleton';
import { EventManager} from './../utils/eventmanager';

export class CartPanelSidebar extends SidebarPanel {
  constructor(panelId) {
    super(panelId);
    this.cart = new ShoppingCart();
    this.cart.subscribe(this);
    this.cart.notify();
    this.content = null;    
  }

  createHTML() {
    const panel = super.createHTML('shopping_cart', 'Carrito');
    panel.setAttribute('data-cart-side-bar', '');

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

    const $cartTotalContent = document.querySelector('[data-cart-total-content]');
    if ($cartTotalContent) {
      $cartTotalContent.remove();
    }

    if (!items.length) {
      this.content.innerHTML = `
        <div class="product-showcase">
          <h3 class="showcase-heading">El carrito de compras está vacío</h3>
        </div>
      `;
      return;
    }

    // Se borran los items
    const $productIds = document.querySelectorAll('[data-product-id]')
    if ($productIds) {
      $productIds.forEach(item => item.remove());
    }

    this.content.innerHTML = `
        <div class="product-showcase">
          <h3 class="showcase-heading">Productos</h3>
          <div class="showcase-wrapper">
            <div class="showcase-container">
               ${items.map(({ id, image_url, name, formatted_price }) => `
                <div class="showcase" data-product-id="${ this.storage.domain }-product-${ id }">
                  <a href="/producto.html?id=${ id }" class="showcase-img-box">
                    <img src="${ image_url }" alt="${ name }" title="${ name }" width="75" height="75" loading="lazy" class="showcase-img">
                  </a>
                  <div class="showcase-content">
                    <div class="detail-wrapper">
                      <a href="/producto.html?id=${ id }" class="showcase-product-link">
                          <h4 class="showcase-title">${ name }</h4>
                      </a>
                      <div class="product-price-wrapper">
                          <span class="label-medium">${ formatted_price }</span>
                      </div>
                      <div class="product-amount-wrapper">
                          <span class="material-symbols-outlined" aria-hidden="true">orders</span>
                          <input type="number" class="product-amount contact-input-field" id="product-amount-${ id }" data-producto-id="${ id }" value="1" oninput="validateNumberValueAllowed(this)" onchange="updateProductInCartAmount(this)">
                      </div>
                    </div>
                    <button class="icon-btn has-state saved" aria-label="Eliminar producto del carrito" data-saved-producto-id="7676">
                      <span class="material-symbols-outlined bookmark" aria-hidden="true">delete</span>
                    </button>
                  </div>
                </div>
            `).join('')}
            </div>
          </div>
        </div>
    `;

    if (items.length > 0) {
      this.updateTotal(items);
    }
    
    EventManager.addEventOnElements(document.querySelectorAll('[data-saved-producto-id'), 'click', (event) => {
      const { savedProductoId } = event.target.dataset;
      this.cart.removeItem(Number(savedProductoId));
    });
  }

  initEvents() {
    super.initEvents();
    //this.totalPriceEl = this.panel.querySelector('[data-cart-total-price]');
    //this.clearBtn = this.panel.querySelector('[data-cart-content-clear]');
    //if (this.clearBtn) {
    //  this.clearBtn.addEventListener('click', () => this.clearCart());
    //}
  }

  updateTotal(items) {
    if (!this.content) return;
    const $cartTotalContent = document.querySelector('[data-cart-total-content]');
    if ($cartTotalContent) {
      $cartTotalContent.remove();
    }

    const sidebarTotal = document.createElement('div');
    sidebarTotal.classList.add('side-bar-total');
    sidebarTotal.setAttribute('data-cart-total-content', '');

    if (!items.length) {
      sidebarTotal.classList.remove('active');
      return;
    }

    const formatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    let totalWithBenefits = 0;

    let total = items.reduce((acc, product) => {
      if (product.hasOwnProperty('intPremiumPrice') && product.intPremiumPrice > 0) {
          totalWithBenefits += (product.amount * product.intPremiumPrice);
      } else {
          totalWithBenefits += product?.amount * product?.int_price;
      }
      return acc + (product?.amount * product?.int_price);
    }, 0);

    total = total / 100;
    total = formatter.format(total);

    const totalLabel = `
      <span class="body-large span">Total:</span>
      <span data-cart-total-price>$ ${total}</span>
    `;

    sidebarTotal.innerHTML = totalLabel
    sidebarTotal.classList.add('active');

    this.content.insertAdjacentElement('afterend', sidebarTotal);
  }

  clearCart() {
    const content = this.panel.querySelector('[data-cart-content]');
    content.innerHTML = '';
    //this.updateTotal('$ 0,00');
  }
}
  