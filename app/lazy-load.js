/*
 * Ленивая загрузка изображений (концепция)
 * - нативная поддержка
 * - событие загрузки изображения
 */

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// на каждую картинку вешаем слушателя событий
lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded, { once: true }); // есть 3 аргумента настройки слушателя, 3 -> {}, куда передаем настройки, опции: once: true -> когда слушатель 1 раз отработает, поймает слушателя, после автоматически самоудалится - снимет регистрацию, не нужен remove
});

function onImageLoaded(e) {
    console.log('Картинка загрузилась');
    // когда картинка загрузилась, добавляем класс, где написаны стили transform
    e.target.classList.add('appear');
}