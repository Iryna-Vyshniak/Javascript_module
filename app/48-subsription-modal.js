//! BOOTSTRAP
// use css from cdn link bootstrap
// use bootstrap.native library - only js for bootstrap, without jquery
// https://thednp.github.io/bootstrap.native/
// import BSN from 'bootstrap.native';

const refs = {
  //   modal: document.querySelector('#subscription-modal'),
  modal: document.querySelector('button[data-dismiss="modal"]'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};
const PROMPT_DELAY = 1500;
const MAX_PROMPT_ATTEMPTS = 3; // maximum number of prompts to be displayed
let promptCounter = 0;
let hasSubscribed = false;
const modal = new BSN.Modal('#subscription-modal');

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal); // hide.bs.modal -> event from bootstrap
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('Maximum number of annoyances or subscribed');
    return;
  }

  setTimeout(() => {
    console.log('Opening the Annoyer');
    modal.show();
    promptCounter += 1; // for show modal again
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribed = true;
  modal.hide();
}
