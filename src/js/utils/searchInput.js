export class SearchInput {
    template = `
      <section class="hero" aria-label="banner" data-products-catalog>
        <div class="banner-card">
          <div class="search-wrapper" data-search-form>
            <input type="search" name="search" aria-label="Buscar.." placeholder="Realizar búsqueda..." class="search-field body-medium" data-search-field>
            <button class="search-submit" aria-label="Submit" data-search-btn>
              <span class="material-symbols-outlined" aria-hidden="true">search</span>
            </button>
          </div>
        </div>
      </section>
    `;

    constructor() {
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = this.template.trim();
        this.element = tempContainer.firstChild;
    }

    mount(selector) {
        const $parent = document.querySelector(selector);
        if ($parent) {
          $parent.appendChild(this.element);
        }
    }
}