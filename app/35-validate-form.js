const userName = document.getElementById('name');
const userPwd = document.getElementById('password');
const policy = document.getElementById('policy');
const btn = document.querySelector('.js-button');
const btnContent = document.querySelector('.js-button span');
console.log(policy);

const validate = ({ value, content }) => {
  const validLength = 7;
  //   const minLength = value.minlength;
  //   console.log(minLength);
  if (value.length < 3 || value.length > validLength) {
    content.textContent = 'Ooops... Wrong';
    content.style.color = 'red';
    userName.style.color = 'red';
    userPwd.style.color = 'red';
  } else if (!value.length) {
    content.textContent = '';
    userName.style.color = 'black';
    userPwd.style.color = 'black';
  } else {
    content.textContent = 'Excellent!';
    btn.textContent = value;
    userName.style.color = 'orangered';
    userPwd.style.color = 'orangered';
  }
};

const debouncedNameInput = _.debounce(e => {
  validate({
    value: e.target.value,
    content: document.querySelector('.validate-message'),
  });
}, 300);
const debouncedPwdInput = _.debounce(e => {
  validate({
    value: e.target.value,
    content: document.querySelector('.validate-message-psd'),
    // content: event.target.nextElementSibling,
  });
}, 300);

const onCheckedChange = e => {
  btn.disabled = !e.currentTarget.checked;
};

userName.addEventListener('input', debouncedNameInput);
userPwd.addEventListener('input', debouncedPwdInput);
policy.addEventListener('change', onCheckedChange);
