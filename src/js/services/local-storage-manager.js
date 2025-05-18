import { CLIENT_DOMAIN } from "../utils/helpers";

// ToDo: Quizas haya que implementar un singleton
export class LocalStorageManager {
    domain = CLIENT_DOMAIN;

    constructor() {}

    generateKey(key) {
        return `${this.domain}-${key}`;
    }

    // Agregar un elemento al localStorage
    addItem(key, value) {
        const storageKey = this.generateKey(key);
        const serializedValue = JSON.stringify(value);
        window.localStorage.setItem(storageKey, serializedValue);
    }

    // Obtener un elemento del localStorage
    getItem(key) {
        const storageKey = this.generateKey(key);
        const serializedValue = window.localStorage.getItem(storageKey);
        return serializedValue ? JSON.parse(serializedValue) : null;
    }

    // Remover un elemento del localStorage
    removeItem(key) {
        const storageKey = this.generateKey(key);
        window.localStorage.removeItem(storageKey);
    }

    // Obtener todos los elementos con el namespace
    getAllItems() {
        const items = {};
        Object.keys(window.localStorage).forEach(storageKey => {
            if (storageKey.startsWith(this.domain)) {
                items[storageKey] = JSON.parse(window.localStorage.getItem(storageKey));
            }
        });
        return items;
    }

    // Limpiar todos los elementos con el namespace
    clearNamespace() {
        Object.keys(window.localStorage).forEach(storageKey => {
            if (storageKey.startsWith(this.domain)) {
                window.localStorage.removeItem(storageKey);
            }
        });
    }
}

// Ejemplo de uso:
// const storage = new LocalStorageManager('herrajesoeste');

// Agregar un producto
// storage.addItem('product-123', { id: 123, name: 'Producto A', price: 100 });

// Obtener un producto
// const product = storage.getItem('product-123');

// Remover un producto
// storage.removeItem('product-123');

// Obtener todos los productos
// const allProducts = storage.getAllItems();

// Limpiar todos los productos del namespace
// storage.clearNamespace();