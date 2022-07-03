/*
2. WebApi - TEMPLATES
- Ayuda a generar estrtructura de html y css y vivir dentro de nuestro componente web 
- devuelve un document fragment que debemos clonar
- opcional
- si dentro de tu componente web vienen muchos elementos que se convierten en nodos lo ideal es ocupar templates
- todo lo que este dentro de la etiqueta <template> no se va a renderizar de inicio, necesita iniciarlo con js
- problemas con estilos --> shadow dom resuelve
*/

class MyElement extends HTMLElement {

    constructor() { //inicializar todo guardar en memoria, despues agregarlos como nodos al DOM
        super();
        this.p = document.createElement("p");
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
    getStyles(){//Metodo estilos, css
        return `
            <style>
            h2{
                color:red;
            }
            </style>
        `;
    }
    render(){
        this.appendChild(this.getTemplates().content.cloneNode(true));//true clona recursivamente
    }

    //Manipular DOM con javascript
    connectedCallback() {//Agregar al DOM. Iniciar nodos
        this.render();
    }
}
customElements.define('my-element', MyElement);//Nombre a etiqueta y de que clase viene. Reglas dos palabras separadas por guion