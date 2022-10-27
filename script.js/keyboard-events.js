"use strict";
/*
 *Події клавіатури. keypress, keydown, keyup
 */
//https://www.toptal.com/developers/keycode/for/a

function keyUp(e) {
    console.log(`code: ${e.code}, type: ${e.type}, key: ${e.key}`);
}

function keyDown(e) {
    console.log(`key down`);
}

document.addEventListener("keyup", keyUp);
document.addEventListener("keydown", keyDown);