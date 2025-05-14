import { LocalStorageManager } from '../services/local-storage-manager';

export class SidebarPanel {
  constructor(panelId) {
    this.storage = new LocalStorageManager('herrajesoeste');
    this.panelId = panelId;
    this.panel = document.getElementById(panelId);
    
    if (!this.panel) {
      this.panel = this.createHTML();
      const $overlay = document.querySelector('[data-overlay]');
      if ($overlay) {
        $overlay.insertAdjacentElement('beforebegin', this.panel);
      }
    }
    this.togglers = document.querySelectorAll(`[data-side-bar-toggler][data-target="${panelId}"]`);
    this.overlay = document.querySelector('[data-overlay]');
    this.initEvents();
  }
  
  createHTML(icon = 'menu', title = 'Panel') {
    const panel = document.createElement('div');
    panel.className = 'right-side-bar';
    panel.id = this.panelId;
    panel.setAttribute('data-side-bar-panel', '');

    panel.innerHTML = `
      <div class="title-wrapper">
        <span class="material-symbols-outlined" aria-hidden="true">${icon}</span>
        <p class="title-medium">${title}</p>
        <button class="icon-btn close-btn has-state" aria-label="Cerrar panel" data-side-bar-toggler data-target="${this.panelId}">
          <span class="material-symbols-outlined" aria-hidden="true">close</span>
        </button>
      </div>
    `;

    return panel;
  }

  initEvents() {
    this.togglers.forEach(toggler => {
      toggler.addEventListener('click', () => {
        if (this.isActive()) {
          this.hide();
        } else {
          this.show();
        }
      });
    });
  }

  isActive() {
    return this.panel.classList.contains('active') && this.overlay.classList.contains('active')
  }

  show() {
    this.overlay.classList.add('active');
    this.panel.classList.add('active');
  }

  hide() {
    this.overlay.classList.remove('active')
    this.panel.classList.remove('active');
  }

  toggle() {
    this.overlay.classList.toggle('active')
    this.panel.classList.toggle('active');
  }

  setContent(html) {
    const content = this.panel.querySelector('.side-bar-content');
    content.innerHTML = html;
  }
}