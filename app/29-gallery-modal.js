const images = [
  {
    title: 'beach',
    src: 'https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581__480.jpg',
  },
  {
    title: 'flowers',
    src: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__480.jpg',
  },
  {
    title: 'polynesia',
    src: 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__480.jpg',
  },
  {
    title: 'sea',
    src: 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__480.jpg',
  },
  {
    title: 'mountains',
    src: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055__480.jpg',
  },
  {
    title: 'mountains',
    src: 'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__480.jpg',
  },
];

const gallery = document.querySelector('.images-gallery');
const modalContainer = document.querySelector('.image-modal-overlay');
const modalContent = document.querySelector('.image-modal');
const btnClose = modalContainer.querySelector('.close');
console.log(btnClose);

const markup = images.reduce(
  (acc, { title, src }) =>
    (acc += `<li class="images-gallery__item"><img src="${src}" title="${title}" width="300" alt="${title}" /></li>`),
  ''
);

const markupModal = images.reduce(
  (acc, { title, src }) =>
    (acc += `<img src="${src}" title="${title}" width="300" alt="${title}" />`),
  ''
);

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', onOpenModal);
window.addEventListener('keydown', onEscapeKeypress);

function onOpenModal(e) {
  if (e.target.nodeName !== 'IMG') return;

  modalContainer.classList.add('visible');

  const currentImgUrl = e.target.src;
  console.dir(e.target);
  modalContent.innerHTML = `<img src="${currentImgUrl}" width="300" height="auto"/><button type="button" class="close">x</button>`;

  const btnClose = modalContainer.querySelector('.close');
  btnClose.addEventListener('click', onModalClose);
}

function onEscapeKeypress(e) {
  if (e.code !== 'Escape') return;
  modalContainer.classList.remove('visible');
}

function onModalClose(e) {
  if (!e.currentTarget.classList.contains('close')) return;

  modalContainer.classList.remove('visible');
  modalContent.innerHTML = '';
}
