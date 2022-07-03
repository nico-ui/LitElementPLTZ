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