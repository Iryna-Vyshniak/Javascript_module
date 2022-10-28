/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);


function onOpenModal(event) {
    // когда модалка открылась - слушай нажатие клавиш
    window.addEventListener('keydown', onEscKeyPress);
    console.log(document.body);
    document.body.classList.add('show-modal');
}

function onCloseModal(event) {
    // когда модалка закрылась - слушай нажатие клавиш
    window.removeEventListener('keydown', onEscKeyPress);
    document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
        console.log('Click on backdrop & close modal!');
        onCloseModal();
    }
}


function onEscKeyPress(event) {
    console.log(event.code);
    // onCloseModal(); // модалка закрывается от любой буквы без if
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;
    if (isEscKey) {
        onCloseModal();
    }
}


