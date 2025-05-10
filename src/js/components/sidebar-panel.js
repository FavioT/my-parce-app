export class SidebarPanel {
    constructor(panelId) {
        this.panelId = panelId;
        this.panel = document.getElementById(panelId);
        if (!this.panel) {
          this.panel = this.createHTML();
          document.body.appendChild(this.panel);
        }
        this.closeBtn = this.panel.querySelector('.close-btn');
        this.togglers = document.querySelectorAll(`[data-side-bar-toggler][data-target="${panelId}"]`);
        this.initEvents();
      }
    
      createHTML() {
        const panel = document.createElement('div');
        panel.className = 'right-side-bar';
        panel.id = this.panelId;
        panel.setAttribute('data-side-bar-panel', '');
    
        panel.innerHTML = `
          <div class="title-wrapper">
            <span class="material-symbols-outlined" aria-hidden="true">menu</span>
            <p class="title-medium">Panel</p>
            <button class="icon-btn close-btn has-state" aria-label="Cerrar panel" data-side-bar-toggler="" data-target="${this.panelId}">
              <span class="material-symbols-outlined" aria-hidden="true">close</span>
            </button>
          </div>
          <div class="side-bar-content"></div>
        `;
    
        return panel;
      }
    
      initEvents() {
        if (this.closeBtn) {
          this.closeBtn.addEventListener('click', () => this.hide());
        }
        this.togglers.forEach(toggler => {
          toggler.addEventListener('click', () => this.toggle());
        });
      }
    
      show() {
        this.panel.classList.add('active');
      }
    
      hide() {
        this.panel.classList.remove('active');
      }
    
      toggle() {
        this.panel.classList.toggle('active');
      }
    
      setContent(html) {
        const content = this.panel.querySelector('.side-bar-content');
        content.innerHTML = html;
      }
}