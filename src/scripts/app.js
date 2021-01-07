const navbar = require('./nav');
const mainContent = require('./mainContent');
require('../css/styles.css');

const content = document.querySelector('#content');
content.appendChild(navbar());
content.appendChild(mainContent());
