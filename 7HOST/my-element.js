class MyElement extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    getTemplates() {
        const template = document.createElement('template');
        template.innerHTML = `
        <section>
            <h2>
                <slot name='titulo'></slot>
            </h2>
            <div>
                <p>
                    <slot name='parrafo'></slot>
                </p>
            </div>
        </section>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
            <style>
                :host {
                    display: inline-block;
                    background: grey;
                    width: 100%;
                    max-width: 450px;
                    min-width: 300px;
                    font-size: 15px;
                }
                :host(.blue){
                    background: blue;
                }
                :host([yellow]){
                    background: yellow; 
                }
                :host([yellow]) p, :host([yellow]) h2{
                    color: blue; 
                }
                /* :host([yellow]) h2{
                    color: green; 
                } */
                :host-context(article.card){
                    display: block;
                    background: red;
                    width: 100%;
                    max-width: 100%;
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