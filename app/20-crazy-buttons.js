// 1) Develop a hover analog through JS
// 2) Change the coordinates of the button
// 3) Change coordinates randomly
// 4) Buttons should not extend beyond the screen
// 5) Use event delegation

// 1) Опрацювати аналог ховера через JS
// 2) Змінити координати кнопки
// 3) Змінити координати рандомно
// 4) Кнопки не мають виходити за межі екрану
// 5) Використати делегування подій

const container = document.querySelector('.container');

const hoverHandler = e => {
  const { target: button } = e;
  button.style.top = `${Math.floor(Math.random() * (window.innerHeight - button.clientHeight))}px`;
  button.style.left = `${Math.floor(Math.random() * (window.innerWidth - button.clientWidth))}px`;
};

container.addEventListener('mouseover', hoverHandler);
