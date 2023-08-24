/*
 * Всплытие событий - focus, blur don`t bubbling
 * event.target - целевой (исходный) элемент, самый глубоко вложенный, тот, на который именно кликнули; в target всегда одно и тоже, тот элемент на который кликнули
 * event.currentTarget - текущий элемент, на слушателе которого поймали событие addEventListener
 */

const refs = {
  parent: document.querySelector('#parent'),
  child: document.querySelector('#child'),
  innerChild: document.querySelector('#inner-child'),
};

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click', onInnerChildClick);

function onParentClick(evt) {
  console.log('onParentClick'); //parent
  console.log('onParentClick -> evt.target', evt.target); //целевой элемент parent
  console.log('onParentClick -> evt.currentTarget', evt.currentTarget); // parent.addEventListener
}

function onChildClick(evt) {
  console.log('onChildClick'); // child -> parent
  console.log('onChildClick -> evt.target', evt.target); // целевой элемент child -> child в target всегда одно и то же, тот элемент на который кликнули
  console.log('onChildClick -> evt.currentTarget', evt.currentTarget); // child.addEventListener -> parent.addEventListener
}

function onInnerChildClick(evt) {
  console.log('onInnerChildClick'); // inner-child -> child -> parent
  console.log('onInnerChildClick -> evt.target', evt.target); //целевой элемент inner-child -> inner-child -> inner-child
  console.log('onInnerChildClick -> evt.currentTarget', evt.currentTarget); //inner-child.addEventListener -> child.addEventListener -> parent.addEventListener
}

const parent2 = document.querySelector('#parent2');

parent2.addEventListener('click', event => {
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
});
