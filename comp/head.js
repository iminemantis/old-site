/*
class Header extends HTMLElement {
	constructor() {
		super();
	}
	
	connectedCallback() {
		this.innerHTML = 
			console.log("test")
			fs.readFile( "header.html");
	}
}

customElements.define("my-header", Header)
*/

/*
var headerHTML ="";

fetch("header.html").then(
	async function(response) {
		headerHTML = await response.text();
		addHeader()
	}
)

function addHeader() {
	var headers = document.getElementsByTagName("header");
	for (let i=0;i<headers.length;i++) {
		headers[i].innerHTML = headerHTML;
	}
}
*/



class Header extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML =
		console.log("fetch");
		fetch("header.html").then(
			async function(response) {
				var headerHTML = await response.text();
				addHeader()
				
			}
		)
	}
}

function addHeader() {
	console.log("function")
	var headers = document.getElementsByTagName("header");
	for (let i=0;i<headers.length;i++) {
		headers[i].innerHTML = headerHTML;
	}
}

customElements.define("my-header", Header)