function recipesPage() {
  const container = document.createElement('div');
  container.className = 'container text-center';

  const sandwiches = document.createElement('h2');
  sandwiches.textContent = 'Saj Sandwiches';
  sandwiches.className = 'mt-5';

  const row = document.createElement('div');
  row.className = 'row';

  for (let i = 0; i < 4; i++) {
    let column = document.createElement('div');
    column.className = 'col-6 p-4';
    let innerDiv = document.createElement('div');
    let heading = document.createElement('h4');
    let paragraph = document.createElement('p');
    paragraph.className = 'text-muted';

    if (i == 0) {
      heading.textContent = 'Special Thyme Saj';
      paragraph.textContent = 'Thyme, Tomatoes, Olive Oil, and Cheese.';
    } else if (i == 1) {
      heading.textContent = 'Thyme and Cheese Saj';
      paragraph.textContent = 'Thyme, Olive Oil, and Mozzarella Cheese.';
    } else if (i == 2) {
      heading.textContent = 'Omelet Saj';
      paragraph.textContent = 'Two Egg Omelet, Mayo, and French Fries.';
    } else {
      heading.textContent = 'Chinese Vegetable Saj';
      paragraph.textContent = 'Sautéed Mixed Vegetables in Soy Sauce.';
    }
    innerDiv.appendChild(heading);
    innerDiv.appendChild(paragraph);
    column.appendChild(innerDiv);
    row.appendChild(column);
  }
  container.appendChild(sandwiches);
  container.appendChild(row);

  return container;
}

module.exports = recipesPage();