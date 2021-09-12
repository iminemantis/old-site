async function getFile(file) {
    let myFile = await fetch(file);
    let html = await myFile.text();
    return html
}

class Header extends HTMLElement{
    constructor(){
        super();
    

    }
    connectedCallback() {
        var test = getFile("comp/header.html").then(
            function(value) {
                console.log(value)
                return(value)
                this.innerHTML = value
            },
        )
    }
}

customElements.define("my-header", Header)