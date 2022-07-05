export class MyElement extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    getTemplates() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h1>Soy h1</h1>
                <div>
                    <p>Soy P</p>
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
                    --primary-color: lime;
                    --secondary-color: tomato;
                    --heading-primary: 30px;
                    --heading-secondary: 25px;
                    display: block;
                }
                section{
                    background: var(--primary-color);
                }
                section div{
                    background: var(--secondary-color);
                }
                h1{
                    font-size: var(--heading-primary);
                }
                p{
                    font-size: var(--heading-secondary);
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