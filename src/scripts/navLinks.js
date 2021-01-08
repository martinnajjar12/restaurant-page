const navLinks = () => {
  const home = document.createElement('a');
  home.className = 'nav-link';
  home.textContent = 'Home';

  const recipes = document.createElement('a');
  recipes.className = 'nav-link';
  recipes.textContent = 'Recipes';

  const contact = document.createElement('a');
  contact.className = 'nav-link';
  contact.textContent = 'Contact Us';

  return { home, recipes, contact };
};

module.exports = navLinks();
