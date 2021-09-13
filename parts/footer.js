class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        
        <div id="footer">
            <p>test</p>
        </div>

        `
    }
}

customElements.define("my-footer", Footer);