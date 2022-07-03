class MyElement extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.tittle = this.getAttribute("tittle");
        this.parrafo = this.getAttribute("parrafo");
        this.imagen = this.getAttribute("imagen");
    }

    getTemplates() {
        const template = document.createElement('template');
        template.innerHTML = `
        <section>
            <h2>${this.title}</h2>
            <div>
                <p>${this.parrafo}</p>
            </div>
            <img src=${this.imagen}/>
        </section>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
            <style>
            h2{
                color:red;
            }
            p{
                color:green;
            }
            </style>
        `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplates().content.cloneNode(true));
    }


    connectedCallback() {
        this.render();
    }
}
customElements.define('my-element', MyElement);