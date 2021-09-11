import java.io.Files;
import java.io.FileNotFoundExeption;
import java.util.Scanner;


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