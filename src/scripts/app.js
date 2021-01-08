const navbar = require('./nav');
const homePage = require('./mainContent');
const recipesPage = require('./recipesPage');
const contactPage = require('./contactPage');
const { home, recipes, contact } = require('./navLinks');
require('../css/styles.css');

const content = document.querySelector('#content');
content.appendChild(navbar);
const dynamicData = document.createElement('div');
dynamicData.appendChild(homePage);
content.appendChild(dynamicData);

home.addEventListener('click', visitHome);
recipes.addEventListener('click', visitRecipes);
contact.addEventListener('click', visitContact);

function visitHome() {
  dynamicData.innerHTML = '';
  dynamicData.appendChild(homePage);
}

function visitRecipes() {
  dynamicData.innerHTML = '';
  dynamicData.appendChild(recipesPage);
}

function visitContact() {
  dynamicData.innerHTML = '';
  dynamicData.appendChild(contactPage);
}
