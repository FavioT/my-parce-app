import { SidebarPanel } from './sidebar-panel';

export class MenuPanelSidebar extends SidebarPanel {
    createHTML() {
      const panel = super.createHTML();
      panel.setAttribute('data-menu-side-bar', '');
  
      const menuHTML = `
        <ul class="burger-menu-list">
          <li><a href="/" class="burger-link">Inicio</a></li>
          <li><a href="/productos.html" class="burger-link">Productos</a></li>
        </ul>
      `;
      panel.querySelector('.side-bar-content').innerHTML = menuHTML;
  
      return panel;
    }
  
    highlightActiveLink(path) {
      const links = this.panel.querySelectorAll('.burger-link');
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === path) {
          link.classList.add('active');
        }
      });
    }
  }
  