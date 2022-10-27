"use strict";
/*
 *Події елементів форм. focus, blur, change, input, submit
 */

const inputRef = document.querySelector(".js-username-input");
const btnRef = document.querySelector(".js-contact-form-submit");
const checkboxRef = document.querySelector(".js-policy-checkbox");
const formRef = document.querySelector(".js-contact-form");
const outputRef = document.querySelector(".js-username-output");

// function inputFocus(e) {
//   e.currentTarget.classList.add("focus");
// }

// function inputBlur(e) {
//   e.currentTarget.classList.remove("focus");
// }

function inputInput({ currentTarget }) {
    const { dataset, value } = currentTarget;

    const isCheck = +dataset.length === value.length;

    if (isCheck) {
        changeClass("valid", "invalid", currentTarget);
        btnRef.disabled = false;
        return;
    }

    btnRef.disabled = true;
    changeClass("invalid", "valid", currentTarget);
}

// function inputChange({ currentTarget }) {
//   const { dataset, value } = currentTarget;

//   const isCheck = +dataset.length === value.length;

//   if (isCheck) {
//     changeClass("valid", "invalid", currentTarget);
//     return;
//   }

//   changeClass("invalid", "valid", currentTarget);
// }

function changeClass(classAdd, classRemove, element) {
    element.classList.add(classAdd);
    element.classList.remove(classRemove);
}

function formSubmit(e) {
    e.preventDefault();

    const { currentTarget: elem } = e;

    if (checkboxRef.checked) {
        elem.elements[0].classList.remove("valid");
        console.log(elem.elements[0].value);
        elem.reset();

        return;
    }

    console.log("not checked");
}

// inputRef.addEventListener("focus", inputFocus);
// inputRef.addEventListener("blur", inputBlur);
inputRef.addEventListener("input", inputInput);
// inputRef.addEventListener("change", inputChange);
formRef.addEventListener("submit", formSubmit);