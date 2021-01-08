const navbar = require('./scripts/nav');
const homePage = require('./scripts/mainContent');
const recipesPage = require('./scripts/recipesPage');
const contactPage = require('./scripts/contactPage');
const { home, recipes, contact } = require('./scripts/navLinks');
require('./css/styles.css');

const content = document.querySelector('#content');
content.appendChild(navbar);
const dynamicData = document.createElement('div');
dynamicData.appendChild(homePage);
content.appendChild(dynamicData);

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

home.addEventListener('click', visitHome);
recipes.addEventListener('click', visitRecipes);
contact.addEventListener('click', visitContact);
