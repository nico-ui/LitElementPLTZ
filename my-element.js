const template = document.createElement('div');
//agregar texto directamente a una etiqueta que se puede convertir en html
//1. Extender html element y generar custom element
template.innerHTML = ` 
    <style>
        .texto{
            color: red;
        }
        p{
            color:blue;
        }
    </style>
    <p>parrafo 1 template</p>
    <p class="texto">parrafo 2 template</p>
`;//literal string

class MyElement extends HTMLElement {

    constructor() { //inicializar todo guardar en memoria, despues agregarlos como nodos al DOM
        super();
        this.p = document.createElement("p");
    }

    //Manipular DOM con javascript
    connectedCallback() {//Agregar al DOM. Iniciar nodos
        this.p.textContent = "variable p constructor";
        this.appendChild(this.p);//agregar directamente al DOM
        this.appendChild(template);
    }
}
customElements.define('my-element', MyElement);//Nombre a etiqueta y de que clase viene. Reglas dos palabras separadas por guion