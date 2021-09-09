const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <style>
        .header {
            background-color: #444444;
            padding: 20px 20px 20px 20px;
            margin: 0px;
            text-align: center;
            z-index: 1;
        }
		
        .header a {
            text-decoration: none;
            color: #bbbbbb;
        }
        .header a:hover {
            color: #dddddd;
        }

        .content {
            padding:16px;
        }
		
        .sticky {
            position:fixed;
            top:0;
            width:100%;
        }

        .sticky + .content {
            padding-top: 100px;
        }
    </style>
    <!--header -->
    <div class="header" id="myHeader">
        <a onclick="openNav()">open</a>
        <a href="index.html"><img src="" alt="page1"</a>
        <a href="page2.html"><img src="" alt="page2"></a>
    </div>
    <script src="code.js"></script>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);