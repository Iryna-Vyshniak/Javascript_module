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

// function addDarkClassToHTML() {
//   try {
//     document
//       .querySelector('html')
//       .classList[localStorage.getItem('theme') === 'dark' ? 'add' : 'remove']('dark');
//   } catch (err) {}
// }
addDarkClassToHTML();
//

// ---------------------------------
class Pagination {
  constructor(container, data) {
    this.container = container;
    this.size = data.size || 30;
    this.page = data.page || 1;
    this.step = data.step || 3;
    this.code = '';
    this.e = null;
  }

  Extend(data) {
    data = data || {};
    this.size = data.size || 30;
    this.page = data.page || 1;
    this.step = data.step || 3;
  }

  Add(s, f) {
    for (let i = s; i < f; i++) {
      this.code += `<a>${i}</a>`;
    }
  }

  Last() {
    this.code += `<i>...</i><a>${this.size}</a>`;
  }

  First() {
    this.code += `<a>1</a><i>...</i>`;
  }

  Click() {
    this.page = +this.innerHTML;
    this.Start();
  }

  // Prev() {
  //   this.page--;
  //   if (this.page < 1) {
  //     this.page = 1;
  //   }
  //   this.Start();
  // }

  // Next() {
  //   this.page++;
  //   if (this.page > this.size) {
  //     this.page = this.size;
  //   }
  //   this.Start();
  // }

  Prev() {
    this.page--;
    if (this.page < 1) {
      this.page = 1;
    }
    this.Start();
  }

  Next() {
    this.page++;
    if (this.page > this.size) {
      this.page = this.size;
    }
    this.Start();
  }

  // Bind() {
  //   const a = this.e.getElementsByTagName('a');
  //   for (let i = 0; i < a.length; i++) {
  //     if (+a[i].innerHTML === this.page) a[i].className = 'current';
  //     a[i].addEventListener('click', () => this.Click(), false);
  //   }
  // }

  // Bind() {
  //   const a = Array.from(this.e.getElementsByTagName('a'));
  //   for (let i = 0; i < a.length; i++) {
  //     if (+a[i].innerHTML === this.page) a[i].className = 'current';
  //     a[i].addEventListener('click', () => this.Click(), false);
  //   }
  // }

  Bind() {
    const a = Array.from(this.e.getElementsByTagName('a'));
    for (let i = 0; i < a.length; i++) {
      if (+a[i].innerHTML === this.page) a[i].className = 'current';
      a[i].addEventListener(
        'click',
        e => {
          e.preventDefault();
          this.page = +e.target.innerHTML;
          this.Start();
        },
        false
      );
    }
  }

  Finish() {
    this.e.innerHTML = this.code;
    this.code = '';
    this.Bind();
  }

  Start() {
    if (this.size < this.step * 2 + 6) {
      this.Add(1, this.size + 1);
    } else if (this.page < this.step * 2 + 1) {
      this.Add(1, this.step * 2 + 4);
      this.Last();
    } else if (this.page > this.size - this.step * 2) {
      this.First();
      this.Add(this.size - this.step * 2 - 2, this.size + 1);
    } else {
      this.First();
      this.Add(this.page - this.step, this.page + this.step + 1);
      this.Last();
    }
    this.Finish();
  }

  Buttons() {
    const nav = this.container.getElementsByTagName('a');
    nav[0].addEventListener('click', () => this.Prev(), false);
    nav[1].addEventListener('click', () => this.Next(), false);
  }

  Create() {
    const html = [
      '<a>◄</a>', // previous button
      '<span></span>', // pagination container
      '<a>►</a>', // next button
    ];
    this.container.innerHTML = html.join('');
    this.e = this.container.getElementsByTagName('span')[0];
    this.Buttons();
  }

  Init() {
    this.Create();
    this.Extend(); // додано
    this.Start();
  }
}
// Initialization
document.addEventListener('DOMContentLoaded', () => {
  const pagination = new Pagination(document.getElementById('pagination'), {
    size: 3, //
    page: 1, // selected page
    step: 3, // pages before and after current
  });
  pagination.Init();
});
