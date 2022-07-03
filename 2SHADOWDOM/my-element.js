/*
SHADOW DOM
Ya no nos preocupamos por los estilos que están adentro y los estilos que estan afuera
document → lo que está fuera del componente
shadowroot → lo que está dentro del componente
*/
class MyElement extends HTMLElement {

    constructor() { //inicializar todo guardar en memoria, despues agregarlos como nodos al DOM
        super();
        this.attachShadow({ mode: "open" });
    }

    getTemplates() {//Metodo html. estructura html del componente
        const template = document.createElement('template');
        template.innerHTML = `
        <section>
            <h2>Soy h2 componente web</h2>
            <div>
                <p>soy parrafo</p>
            </div>
        </section>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {//Metodo estilos, css
        return `
            <style>
            h2{
                color:red;
            }
            </style>
        `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplates().content.cloneNode(true));//true clona recursivamente
    }

    //Manipular DOM con javascript
    connectedCallback() {//Agregar al DOM. Iniciar nodos
        this.render();
    }
}
customElements.define('my-element', MyElement);//Nombre a etiqueta y de que clase viene. Reglas dos palabras separadas por guion