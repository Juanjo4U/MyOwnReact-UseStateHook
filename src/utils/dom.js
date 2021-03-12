export const createAndDelete = (id, idContainer, type = 'div', listener, onListener, insertLast, autofocus = false) => {
    let element = document.querySelector(`#${id}`);
    let prevValue
    if (element) {
        if (type === 'input') prevValue = element.value;
        element.parentNode.removeChild(element);
        if (listener && onListener) element.removeEventListener(listener, onListener);
    }
    const container = document.querySelector(`#${idContainer}`);
    element = document.createElement(type);
    element.setAttribute('id', id);
    if (type === 'input') {
        if (prevValue) {
            element.value = prevValue;
            element.autofocus = autofocus;
        }
    }
    if (listener && onListener) element.addEventListener(listener, onListener);
    if (insertLast) container.appendChild(element);
    else container.insertBefore(element, container.firstChild);
    return element
}