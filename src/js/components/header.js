import { Component } from './component';

export class Header extends Component {
    constructor(selector) {
        super(selector);
    }
    
    setTitle(title) {
        this.render(`<h1>${title}</h1>`);
    }
}