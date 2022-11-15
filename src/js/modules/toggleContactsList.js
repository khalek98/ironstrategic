export const closeList = (modal) => {
  modal.style.display = 'none';
};

export const openList = (trigger, modal, e) => {
  if (e.code && e.code !== 'Enter') return;
  if (modal.style.display === 'grid') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'grid';
  }
};

const openByEvent = (trigger, modal, action) => {
  // console.log(trigger, modal, action);
  trigger.addEventListener(action, (e) => openList(trigger, modal, e));
};

const toggleContactsList = () => {
  const selectedBlock = document.querySelector('.footer-block__selected'),
    contactsList = document.querySelector('.footer-block__list');

  document.body.addEventListener('click', (e) => {
    if (
      e.target !== contactsList &&
      e.target !== selectedBlock &&
      e.target.parentNode !== selectedBlock
    ) {
      closeList(contactsList);
    }
  });

  document.body.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') closeList(contactsList);
  });

  // openList(contactsList);
  openByEvent(selectedBlock, contactsList, 'click');
  openByEvent(selectedBlock, contactsList, 'keydown');
};

export default toggleContactsList;
