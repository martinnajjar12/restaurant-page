const navbar = require('./script/nav');

require('./styles.css');
require('./script/nav');

const content = document.querySelector('#content');
content.appendChild(navbar());
