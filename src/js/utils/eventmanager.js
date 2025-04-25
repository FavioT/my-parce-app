export class EventManager {
    static addEvent(selector, event, callback) {
        const $element = document.querySelector(selector);
        if ($element) {
            $element.addEventListener(event, callback);
        }
    }

    static addEventOnElements(elements, eventType, callback) {
        for (const element of elements) {
            element.addEventListener(eventType, callback);
        }
    }
}