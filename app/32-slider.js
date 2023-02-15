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

const gallery = document.querySelector('[data-slides]');
const buttons = document.querySelectorAll('[data-carousel-button]');

const markup = images.reduce(
  (acc, { src, alt, width }) =>
    (acc += `<li class="slide"><img src="${src}" alt="${alt}" width="${width}" loading="lazy"/></li>`),
  ''
);

gallery.insertAdjacentHTML('beforeend', markup);

buttons.forEach(button => {
  button.addEventListener('click', onBtnSlideClick);

  function onBtnSlideClick() {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button.closest('[data-carousel]').querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    // if (newIndex < 0) newIndex = slides.children.length - 1;
    // if (newIndex >= slides.children.length) newIndex = 0;

    // if we have 1 slide in markup and we know about it
    newIndex = (newIndex + slides.children.length) % slides.children.length;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  }
});

function autoSlider() {
  buttons.forEach(button => {
    const slides = button.closest('[data-carousel]').querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide);

    newIndex += 1;
    // if (newIndex === images[images.length - 1]) newIndex = 0;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    activeSlide.removeAttribute('data-active');
  });
}

setInterval(autoSlider, 5000);
