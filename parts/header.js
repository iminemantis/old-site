/*
async function getFile(file) {
    var myFile = await fetch(file);
    var html = await myFile.text();
    return html;
};

function display(t) {
    document.getElementById("header").innerHTML = t;
};

getFile("parts/header.html").then(
    function(val) {
        display(val);
    }
);
*/

class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        
        <div id="header">
            <div id="main">
                <button class="openbtn" onclick="openNav()">&#9776</button>
            </div>
            <div class="text">
                <a href="#">link1</a>
                <a href="#">link2</a>
                <a href="#">link3</a>
            </div>
        </div>

        `
    }
}

customElements.define("my-header", Header);