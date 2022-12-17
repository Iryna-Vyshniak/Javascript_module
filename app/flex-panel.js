'use strict';

const panelList = document.querySelectorAll('.js-panel');

function onPanelClick(e) {
  const activePanel = document.querySelector('.is-open');

  if (e.currentTarget === activePanel) {
    activePanel.classList.toggle('is-open');
  }

  if (activePanel) {
    activePanel.classList.remove('is-open');
  }

  e.currentTarget.classList.add('is-open');
}

panelList.forEach(panel => {
  panel.addEventListener('click', onPanelClick);
});
