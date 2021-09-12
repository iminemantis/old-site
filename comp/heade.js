async function getFile(file) {
    var myFile = await fetch(file);
    var html = await myFile.text();
    console.log("1: "+html)
    return html
}

class Header extends HTMLElement{
    constructor(){
        super();
    

    }
    connectedCallback() {
        console.log("start");
        console.log(getFile("comp/header.html"))
        var file = getFile("comp/header.html").then(
            console.log(file)
        )
        
        this.innerHTML = file
    }
}
/*        fetch("comp/header.html").then(
            async function(value) {
                var headerHTML = await value.text();
                console.log(headerHTML);
            }
        )
        this.innerHTML = headerHTML    
/*        fetch("comp/header.html").then(
            async function(value) {
                var headerHTML = await value.text();
                console.log(headerHTML);
            }
        )
        this.innerHTML = headerHTML    
*/


customElements.define("my-header", Header)