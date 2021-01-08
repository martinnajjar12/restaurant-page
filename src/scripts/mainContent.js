function mainContent() {
  const main = document.createElement('main');
  main.className = 'container row mx-auto';
  for (let i = 0; i < 4; i += 1) {
    const column = document.createElement('div');
    if (i === 0) {
      column.className = 'col-12';
      const image = document.createElement('img');
      image.className = 'img-fluid';
      image.setAttribute('alt', 'Main Image');
      image.setAttribute('src', '../src/imgs/main.jpg');
      column.appendChild(image);
      main.appendChild(column);
    } else if (i === 1) {
      column.className = 'col-6';
      const image = document.createElement('img');
      image.className = 'img-fluid w-100';
      image.setAttribute('alt', 'Second Image');
      image.setAttribute('src', '../src/imgs/second.jpg');
      column.appendChild(image);
      main.appendChild(column);
    } else if (i === 2) {
      column.className = 'col-6';
      const image = document.createElement('img');
      image.className = 'img-fluid w-100';
      image.setAttribute('alt', 'Third Image');
      image.setAttribute('src', '../src/imgs/third.jpg');
      column.appendChild(image);
      main.appendChild(column);
    } else {
      column.className = 'col-12';
      const image = document.createElement('img');
      image.className = 'img-fluid';
      image.setAttribute('alt', 'Fourth Image');
      image.setAttribute('src', '../src/imgs/fourth.jpg');
      column.appendChild(image);
      main.appendChild(column);
    }
  }
  return main;
}

module.exports = mainContent();
