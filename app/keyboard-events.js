"use strict";
/*
 *Події клавіатури. keypress, keydown, keyup

 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 
 */
//https://www.toptal.com/developers/keycode/for/a
/*
function keyUp(e) {
    console.log(`code: ${e.code}, type: ${e.type}, key: ${e.key}`);
}

function keyDown(e) {
    console.log(`key down`);
}

document.addEventListener("keyup", keyUp);
document.addEventListener("keydown", keyDown);
*/

// ====================================================
const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
};

// события прослушивания клавиатуры вешаем на окно
window.addEventListener('keypress', onKeypress); // symbol letters  / ! alt, shift, ctrl, esc don`t work, only for text /

// window.addEventListener('keydown', onKeypress); // alt, shift, ctrl, esc  work
refs.clearBtn.addEventListener('click', onClearBtnClick);

function onKeypress(event) {
    console.log('event.key: ', event.key); // key - значение буквы, которую вводим: w, і, ы
    console.log('event.code: ', event.code); // соde - код клавиши, код физ.клавиши на клавиатуре
    // усли хотим что-то напечатать в окне используем 'keypress' & event.key
    refs.output.textContent += event.key;
}

// oчищаем написаное
function onClearBtnClick() {
    refs.output.textContent = '';
}