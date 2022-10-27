"use strict";
/*
 * Основи подій. Створення та видалення слухачів. Об'єкт події
 */

// https://picsum.photos/200/300

const swapBtnRef = document.querySelector(".js-swap-btn");
const clearBtnRef = document.querySelector(".js-remove-listener");
const imgRef = document.querySelector(".js-img");

swapBtnRef.addEventListener("click", swapImage);

function swapImage(e) {
    e.currentTarget.disabled = true;

    imgRef.src = "https://picsum.photos/200/300";
    imgRef.alt = "random picture";
    imgRef.width = "500";
    imgRef.style.height = "auto";
}

clearBtnRef.addEventListener("click", clearListener);

function clearListener() {
    swapBtnRef.addEventListener("click", swapImage);
}

document.documentElement.addEventListener("keyup", keyupFun);

function keyupFun() {
    console.log("data");
}