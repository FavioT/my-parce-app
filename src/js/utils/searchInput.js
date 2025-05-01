export class SearchInput {
    template = `
      <div class="banner-card">
        <div class="search-wrapper" data-search-form>
          <input type="search" name="search" aria-label="Buscar.." placeholder="Realizar búsqueda..." class="search-field body-medium" data-search-field>
          <button class="search-submit" aria-label="Submit" data-search-btn>
            <span class="material-symbols-outlined" aria-hidden="true">search</span>
          </button>
        </div>
      </div>
    `;

    constructor() {
      const tempContainer = document.createElement('div');
      tempContainer.innerHTML = this.template.trim();
      this.element = tempContainer.firstChild;

      this.inputButton = this.element.querySelector('[data-search-btn]');
      this.inputField = this.element.querySelector('[data-search-field]');

      this.setClickEvent();
      this.setKeydownEvent();
    }

    mount(selector) {
      const $parent = document.querySelector(selector);
      if ($parent) {
        $parent.appendChild(this.element);
      }

      return this;
    }

    setClickEvent() {
      this.inputButton.addEventListener('click', (event) => {
        event.preventDefault();

        const searchTerm = this.inputField.value;

        if (searchTerm) {
          window.location.href = `/productos.html?q=${encodeURIComponent(searchTerm)}`;
        }
      });
    }

    setKeydownEvent() {
      this.inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          this.inputButton.click();
        }
      });
    }
}