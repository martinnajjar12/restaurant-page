const { home, recipes, contact } = require('./navLinks');

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
  navList.appendChild(home);
  navList.appendChild(recipes);
  navList.appendChild(contact);

  container.appendChild(navbarBrand);
  container.appendChild(navList);
  nav.appendChild(container);
  header.appendChild(nav);
  return header;
}

module.exports = navbar();
