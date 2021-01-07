function navbar() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  nav.className = 'navbar navbar-expand-lg navbar-light bg-light';
  const container = document.createElement('div');
  container.className = 'container';
  const navbarBrand = document.createElement('a');
  navbarBrand.className = 'navbar-brand';
  navbarBrand.setAttribute('href', '/');
  navbarBrand.textContent = 'Saj Al-Reef';
  const navList = document.createElement('ul');
  navList.className = 'd-flex';
  for (let i = 0; i < 3; i++) {
    let navLink = document.createElement('a');
    navLink.className = 'nav-link';
    if (i == 0) {
      navLink.textContent = 'Home';
    } else if (i == 1) {
      navLink.textContent = 'Recipes';
    } else {
      navLink.textContent = 'Contact Us';
    }
    navList.appendChild(navLink);
  }

  container.appendChild(navbarBrand);
  container.appendChild(navList);
  nav.appendChild(container);
  header.appendChild(nav);
  return header;
}

module.exports = navbar;
