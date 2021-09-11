class Sidebar extends HTMLElement {
	constructor() {
		super();
	}
	
	connectedCallback() {
		this.innerHTML =`
			<style>
				.sidenav {
					height: 100%;
					width: 0;
					position: fixed;
					z-index: 2;
					left: 0;
					background-color: #111;
					overflow-x: hidden;
					padding-top: 60px; 
					transition: 0.5s;
				}
				
				.sidenav a {
					padding: 8px 8px 8px 32px;
					text-decoration: none;
					font-size: 25px;
					color: #818181;
					display: block;
					transition: 0.3s;
				}
				
				.sidenav a:hover {
					color: #f1f1f1;
				}
				
				.sidenav .closebtn{
					position: absolute;
					top: 0;
					right: 25px;
					font-size: 35px;
					margin-right: 10px;
				}
				
				.sidenav .loginbtn {
					padding: 20px;
					font-size: 15px;
					position: absolute;
					top: 0;
					left: 25;
				}
			</style>
			<!-- side navagation bar -->
			<div class="sidenav" id="mySidenav">
				<div>
					<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
					<a href="login.html" class="loginbtn">login(fake)</a>
				</div>
				<a href="#">test</a>
			</div>
			<script src="code.js"></script>
		`;
	}
}

customElements.define('sidebar-component', Sidebar)