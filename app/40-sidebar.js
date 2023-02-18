const sidebar = document.querySelector('.sidebar');
console.log(sidebar);

document.querySelector('button[data-open-sidebar]').addEventListener('click', e => {
  openSidebar();
});

document.querySelector('button[data-close-sidebar]').addEventListener('click', e => {
  closeSidebar();
});

function openSidebar() {
  sidebar.classList.add('is-open');
}
function closeSidebar() {
  sidebar.classList.remove('is-open');
}
