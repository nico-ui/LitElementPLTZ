class MyElement extends HTMLElement {

    constructor() {
        super();
        console.log('Hola desde el constructor - Memoria');
    }

    connectedCallback() {
        console.log('Hola desde el DOM');
    }

    disconnectedCallback() {
        console.log('Adios del DOM');
    }
}
//Definimos nuestro componente para utilizarlo como etiqueta
customElements.define('my-element', MyElement);

document.querySelector('my-element').remove();