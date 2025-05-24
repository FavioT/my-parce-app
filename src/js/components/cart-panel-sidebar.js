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
    if (!this.content) {
      this.content = this.panel?.querySelector?.('[data-cart-content]');
      if (!this.content) return;
    }

    // Limpia el contenido anterior
    this.content.innerHTML = "";

    if (!items.length) {
      this.content.innerHTML = `
        <div class="product-showcase">
          <h3 class="showcase-heading">El carrito de compras está vacío</h3>
        </div>
      `;
      return;
    }

    // Crea el contenedor principal
    const showcaseDiv = document.createElement('div');
    showcaseDiv.className = 'product-showcase';

    const heading = document.createElement('h3');
    heading.className = 'showcase-heading';
    heading.textContent = 'Productos';
    showcaseDiv.appendChild(heading);

    const wrapper = document.createElement('div');
    wrapper.className = 'showcase-wrapper';

    const container = document.createElement('div');
    container.className = 'showcase-container';

    items.forEach(({ id, image_url, name, formatted_price }) => {
      const showcase = document.createElement('div');
      showcase.className = 'showcase';
      showcase.dataset.productId = `${this.storage.domain}-product-${id}`;

      // Imagen
      const imgBox = document.createElement('a');
      imgBox.href = `/producto.html?id=${id}`;
      imgBox.className = 'showcase-img-box';
      const img = document.createElement('img');
      img.src = image_url;
      img.alt = name;
      img.title = name;
      img.width = 75;
      img.height = 75;
      img.loading = 'lazy';
      img.className = 'showcase-img';
      imgBox.appendChild(img);

      // Contenido
      const contentDiv = document.createElement('div');
      contentDiv.className = 'showcase-content';

      // Detalles
      const detailWrapper = document.createElement('div');
      detailWrapper.className = 'detail-wrapper';

      const productLink = document.createElement('a');
      productLink.href = `/producto.html?id=${id}`;
      productLink.className = 'showcase-product-link';
      const title = document.createElement('h4');
      title.className = 'showcase-title';
      title.textContent = name;
      productLink.appendChild(title);

      const priceWrapper = document.createElement('div');
      priceWrapper.className = 'product-price-wrapper';
      const price = document.createElement('span');
      price.className = 'label-medium';
      price.textContent = `$ ${formatted_price}`;
      priceWrapper.appendChild(price);

      const amountWrapper = document.createElement('div');
      amountWrapper.className = 'product-amount-wrapper';
      const icon = document.createElement('span');
      icon.className = 'material-symbols-outlined';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = 'orders';
      const input = document.createElement('input');
      input.type = 'number';
      input.className = 'product-amount contact-input-field';
      input.id = `product-amount-${id}`;
      input.dataset.productoId = id;
      input.value = 1;
      input.oninput = (event) => {
        let { value, dataset } = event.currentTarget;

        value = value.replace(/[^0-9]/g, '');
        value = value.replace(/(\..*)\./g, '$1');

        const productData = this.storage.getItem(`product-${dataset.productoId}`);
        if (!productData) {
          return;
        }

        const newValue = parseInt(value) || 1;
        productData.amount = newValue > 1_000_000 ? 1_000_000 : newValue;
        this.storage.addItem(`product-${dataset.productoId}`, productData);

        this.updateTotal(items);
      };

      amountWrapper.appendChild(icon);
      amountWrapper.appendChild(input);

      detailWrapper.appendChild(productLink);
      detailWrapper.appendChild(priceWrapper);
      detailWrapper.appendChild(amountWrapper);

      // Botón eliminar
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'icon-btn has-state saved';
      deleteBtn.setAttribute('aria-label', 'Eliminar producto del carrito');
      deleteBtn.dataset.savedProductoId = id;
      deleteBtn.addEventListener('click', (event) => {
        const { savedProductoId } = event.currentTarget.dataset;
        this.cart.removeItem(Number(savedProductoId));
      });

      const deleteIcon = document.createElement('span');
      deleteIcon.className = 'material-symbols-outlined bookmark';
      deleteIcon.setAttribute('aria-hidden', 'true');
      deleteIcon.textContent = 'delete';
      deleteBtn.appendChild(deleteIcon);

      contentDiv.appendChild(detailWrapper);
      contentDiv.appendChild(deleteBtn);

      showcase.appendChild(imgBox);
      showcase.appendChild(contentDiv);

      container.appendChild(showcase);
    });

    wrapper.appendChild(container);
    showcaseDiv.appendChild(wrapper);
    this.content.appendChild(showcaseDiv);
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
  