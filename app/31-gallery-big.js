const main = document.querySelector('main');

const renderMarkup = () => {
  const ul = document.createElement('ul');
  ul.classList.add('images-gallery');

  for (let i = 1; i < 100; i += 1) {
    const imgUrl = `https://picsum.photos/id/${Math.round(Math.random() * 1000)}/300/200`;
    console.log(imgUrl);
    const img = `<img src="${imgUrl}" alt="Random Image" class="lazyload" />`;
    ul.insertAdjacentHTML('beforeend', img);
  }
  console.log(ul);
  return ul;
};
// const markup = renderMarkup();
// main.insertAdjacentHTML('beforeend', markup);
renderMarkup();
