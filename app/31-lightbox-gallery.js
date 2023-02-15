const images = [
  {
    src: 'https://source.unsplash.com/1200x1200?sea',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?clouds',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?sunrise',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?seaside',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?mountain',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?forest',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?sea',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?beach',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?bird',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?boat',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?hills',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?camping',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?flower',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?cliff',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?road',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?ocean',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?lakes',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?snow',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?idylic',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?aurora',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?sequoia',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?arctic',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?cave',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?desert',
    alt: 'nature',
    width: 400,
  },
  {
    src: 'https://source.unsplash.com/1200x1200?rainforest',
    alt: 'nature',
    width: 400,
  },
];

const gallery = document.querySelector('.images-gallery');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const markup = images.reduce(
  (acc, { src, alt, width }) =>
    (acc += `<li class="images-gallery__item"><img src="${src}" alt="${alt}" width="${width}" loading="lazy"/></li>`),
  ''
);
gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', onOpenModal);
lightbox.addEventListener('click', onBackdropClick);

function onOpenModal(e) {
  console.log('currentTarget: ', e.currentTarget.nodeName);
  console.log('target: ', e.target.nodeName);
  console.log('target: ', e.target.src);

  if (e.target.nodeName !== 'IMG') return;
  lightbox.classList.add('active');
  const img = document.createElement('img');
  img.src = e.target.src;

  while (lightbox.firstChild) {
    lightbox.removeChild(lightbox.firstChild);
  }

  lightbox.appendChild(img);
  window.addEventListener('keydown', onEscapeKeypress);
}

function onBackdropClick(e) {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
  window.removeEventListener('keydown', onEscapeKeypress);
}

function onEscapeKeypress(e) {
  if (e.code !== 'Escape') return;
  lightbox.classList.remove('active');
}

//crazy random variant
// const main = document.querySelector('main');

// const renderMarkup = () => {
//   // const ul = document.createElement('ul');
//   // ul.classList.add('images-gallery');

//   for (let i = 1; i < 100; i += 1) {
//     const imgUrl = `https://picsum.photos/id/${Math.round(Math.random() * 1000)}/300/200`;
//     console.log(imgUrl);
//     const markup = `<img src="${imgUrl}" alt="Random Image" class="lazyload" />`;
//     // ul.insertAdjacentHTML('beforeend', img);
//     main.insertAdjacentHTML('beforeend', markup);
//   }
//   // console.log(ul);
//   // return ul;
// };
// // const markup = renderMarkup();
// // main.insertAdjacentHTML('beforeend', markup);
// renderMarkup();
