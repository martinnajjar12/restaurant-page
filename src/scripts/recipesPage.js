function recipesPage() {
  const container = document.createElement('div');
  container.className = 'container text-center text-white';
  const bgDiv = document.createElement('div');
  bgDiv.className = 'setBg';
  const transparentDiv = document.createElement('div');
  transparentDiv.className = 'trptDiv';

  const sandwiches = document.createElement('h2');
  sandwiches.textContent = 'Saj Sandwiches';
  sandwiches.className = 'pt-5';

  const row = document.createElement('div');
  row.className = 'row';

  for (let i = 0; i < 4; i += 1) {
    const column = document.createElement('div');
    column.className = 'col-6 p-4';
    const innerDiv = document.createElement('div');
    const heading = document.createElement('h4');
    const paragraph = document.createElement('p');
    paragraph.className = 'text-color';

    if (i === 0) {
      heading.textContent = 'Special Thyme Saj';
      paragraph.textContent = 'Thyme, Tomatoes, Olive Oil, and Cheese.';
    } else if (i === 1) {
      heading.textContent = 'Thyme and Cheese Saj';
      paragraph.textContent = 'Thyme, Olive Oil, and Mozzarella Cheese.';
    } else if (i === 2) {
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
  transparentDiv.appendChild(sandwiches);
  transparentDiv.appendChild(row);
  bgDiv.appendChild(transparentDiv);
  container.appendChild(bgDiv);

  return container;
}

module.exports = recipesPage();
