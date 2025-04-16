export class Component {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    
    render(html) {
        if (this.element) {
            this.element.innerHTML = html;
        }
    }
}