export class Component {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    addElement(newElement) {
        this.element.append(newElement);
        this.render(this.element);
    }
    
    render(html) {
        if (this.element) {
            this.element.innerHTML = html;
        }
    }
}