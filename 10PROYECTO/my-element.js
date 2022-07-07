export class MyElement extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    getTemplates() {
        const template = document.createElement('template');
        template.innerHTML = `
            <img src=""></img>
            <section>
                <div class="titulo">
                    <h1>
                        <slot name="titulo"></slot>
                    </h1>
                    <h3>
                        <slot name="subtitulo"></slot>    
                    </h3>
                </div>
                <p>
                    <slot name="parrafo"></slot>
                </p>
                <div>
                    <h1>
                        <slot name="precio"></slot>
                    </h1>
                    <button>
                        <slot name="comprar"><slot>
                    </button>
                </div>
            </section>
        ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
            <style>
                :host{
                    display:block:
                }
                section{
                    background: cyan;

                }
                section div{
                    display:flex;
                }
                .titulo{
                    display:flex;
                    background: red;
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
customElements.define('product-card', MyElement);