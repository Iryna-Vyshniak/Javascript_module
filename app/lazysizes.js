/*
 * Библиотека lazysizes
 * - feature detection
 */

if ('loading' in HTMLImageElement.prototype) {
    console.log('Браузер поддерживает lazyload');
    addSrcAttrToLazyImages();
} else {
    console.log('Браузер НЕ поддерживает lazyload');
    addLazySizesScript();
}

// add class to animation
const lazyImages = document.querySelectorAll('img[data-src]');

lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(e) {
    console.log('Картинка загрузилась');
    e.target.classList.add('appear');
}

// feature  detection выявление возможностей браузера: если что-то есть - делаем одно, нет - делаем другое
function addLazySizesScript() {
    console.log('Браузер HE поддерживает lazyload');
    const script = document.createElement('script');
    script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
    script.integrity =
        'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
    script.crossOrigin = 'anonymous';

    document.body.appendChild(script);
}

function addSrcAttrToLazyImages() {
    console.log('Браузер поддерживает lazyload');
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
}