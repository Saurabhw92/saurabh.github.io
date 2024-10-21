class MyHeader extends HTMLElement {
    constructor() {
        super();
      }
  
      connectedCallback() {
        
  
        // Rendering content with the title
        this.innerHTML = `
          <header>
            <h1>${title}</h1>
          </header>`;
      }
    connectedCallback() {

        // Accessing the "title" attribute
        const activePage = this.getAttribute('activePage');

        this.innerHTML = `
                <!-- Header -->
					<header id="header">
						<a href="index.html" class="logo">Projects</a>
					</header>

				<!-- Nav -->
					<nav id="nav">
						<ul class="links">
							<li class=${activePage === 'projects' ? "active" : ''}><a href="index.html">Projects</a></li>
							<li class=${activePage === 'education' ? "active" : ''}><a href="education.html">Education</a></li>
							<li class=${activePage === 'courses' ? "active" : ''}><a href="elements.html">Courses & Certifications</a></li>
						</ul>
						<ul class="icons">
							<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
							<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
							<li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
						</ul>
					</nav>
      `;
    }
  }

  customElements.define('my-header', MyHeader);