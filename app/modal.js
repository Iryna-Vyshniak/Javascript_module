/**
 * Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body.
 * Модальне вікно має закриватися при кліку на напівпрозорий оверлей,
 * та на іконку хрестика всередині модалки
 */

/**
 * 3. Створити форму реєстрації користувача за допомогою js де буде 2 поля 
    1. Поле логіна
    2. Поле пароль
    3. Захаркодити вірні логін і пароль в константах
 
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'), // id="#myBtn"
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'), // id="myModal"
  modal: document.querySelector('.js-modal-content'),
};

const validLogin = `fox`;
const validPassword = `1234qwerty`;

const formMarkup = `<form class="login-form">
      <label>
        <span>Login</span>
        <input type="text" name="Login" id="input-login"/>
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" data-length="10" id="input-password"/>
      </label>
      <label class='license'>
          <input type="checkbox" disabled class="js-license" />
          Accept the license agreement
        </label>
      </p>

      <button type="submit" disabled class="js-button">
       Sign in as <span>Anonymous</span>
      </button>
    </form>
`;

const successEnter = `<p class="success" style='align-self: center; margin: 5rem 0; color: green; text-align: center; font-size: 2rem;'>Sign in succesfully</p>`;
const errorEnter = `<p class="error" style='align-self: center; margin: 2rem 0; color: red; text-align: center; font-size: 1.5rem;'>Email or password doesn't correct</p>`;

refs.modal.insertAdjacentHTML('beforeend', formMarkup);
const form = refs.modal.querySelector('.login-form');
const inputLogin = refs.modal.querySelector('#input-login');
const inputPassword = refs.modal.querySelector('#input-password');
const license = refs.modal.querySelector('.js-license');
const nameSignIn = refs.modal.querySelector('.js-button span');
const btnSignIn = refs.modal.querySelector('.js-button');
// console.dir(license);
// console.log('license:', license.disabled);
// license.disabled = false;
// console.log('license:', license.disabled);
// console.dir(license);

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
form.addEventListener('submit', onFormSubmit);

inputLogin.addEventListener('blur', onInputLoginBlur);
inputLogin.addEventListener('input', onInputLogin);
inputPassword.addEventListener('blur', onInputPasswordBlur);

license.addEventListener('change', onLicenseChange);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(e) {
  const ESC_KEY = 'Escape';
  if (e.code === ESC_KEY) {
    onCloseModal();
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  // const { email, password } = e.currentTarget.elements;

  const data = {};
  const formData = new FormData(e.currentTarget);
  formData.forEach((value, name) => (data[name] = value));

  if (data.Login === validLogin && data.password === validPassword) {
    // form.remove();
    refs.modal.insertAdjacentHTML('beforeend', successEnter);
  } else {
    refs.modal.insertAdjacentHTML('beforeend', errorEnter);
  }
  const p = refs.modal.querySelector('p');
  console.log(p);
  e.currentTarget.reset();

  setTimeout(() => {
    p.remove();
  }, 5000);
}

function onInputLoginBlur(e) {
  console.log(e.currentTarget.value);
  if (e.currentTarget.value === validLogin) {
    inputLogin.classList.add('valid');
    inputLogin.classList.remove('invalid');
  } else if (e.currentTarget.value !== validLogin) {
    inputLogin.classList.add('invalid');
    inputLogin.classList.remove('valid');
  } else {
    e.currentTarget.classList.remove('valid');
    e.currentTarget.classList.remove('invalid');
  }
}

function onInputPasswordBlur(e) {
  console.log(e.currentTarget.value);
  if (e.currentTarget.value === validPassword) {
    inputPassword.classList.add('valid');
    inputPassword.classList.remove('invalid');
    license.disabled = false;
  } else if (e.currentTarget.value !== validPassword) {
    inputPassword.classList.add('invalid');
    inputPassword.classList.remove('valid');
  } else {
    e.currentTarget.classList.remove('valid');
    e.currentTarget.classList.remove('invalid');
  }
}

function onInputLogin(e) {
  console.log(e.currentTarget.value);
  nameSignIn.textContent = e.currentTarget.value;
}

function onLicenseChange(e) {
  btnSignIn.disabled = !e.currentTarget.checked;
}
