const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const headerMarkup = `
  <nav class="navbar">
    <div class="logo">
      <img class="logo-img" src="static/images/web.png" alt="logo">
      <h2>WILLIAM's Website</h2>
    </div>
    <ul class="navlinks">
      <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
      <li><a href="about.html" class="${currentPage === 'about.html' ? 'active' : ''}">About</a></li>
      <li><a href="projects .html" class="${currentPage === 'projects .html' ? 'active' : ''}">Projects</a></li>
      <li><a class="nav-contact" href="contact.html">Let's Talk</a></li>
    </ul>
  </nav>
`;

const footerMarkup = `
  <nav class="navbar footer-navbar">
    <div class="logo">
      <h2>PlatformWebsite</h2>
    </div>
    <ul class="navlinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="projects .html">Projects</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
`;

const header = document.querySelector('#site-header');
const footer = document.querySelector('#site-footer');

if (header) {
  header.innerHTML = headerMarkup;
}

if (footer) {
  footer.innerHTML = footerMarkup;
}
