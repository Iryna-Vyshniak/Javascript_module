const htmlEl = document.querySelector('html');
const theme = document.querySelector('.theme');
const icon = document.querySelector('.material-symbols-outlined');
const timeOfDay = document.querySelector('.time');

const THEME_STORAGE_KEY = 'theme';

theme.addEventListener('click', e => {
  e.preventDefault();

  if (localStorage.getItem(THEME_STORAGE_KEY) === 'dark') {
    localStorage.removeItem(THEME_STORAGE_KEY);
  } else {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');
  }
  addDarkClassToHTML();
});

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem(THEME_STORAGE_KEY) === 'dark') {
      htmlEl.classList.add('dark');
      icon.textContent = 'sleep';
      timeOfDay.textContent = 'Night';
    } else {
      htmlEl.classList.remove('dark');
      icon.textContent = 'sunny';
      timeOfDay.textContent = 'Day';
    }
  } catch (err) {}
}
addDarkClassToHTML();
