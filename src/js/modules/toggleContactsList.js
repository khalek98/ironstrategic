const toggleContactsList = () => {
  const selectedBlock = document.querySelector('.footer-block__selected'),
    contactsList = document.querySelector('.footer-block__list');

  let stateList = false;

  const closeList = () => {
    contactsList.style.display = 'none';
  };

  const openList = () => {
    selectedBlock.addEventListener('click', () => {
      contactsList.style.display = 'grid';
      stateList = true;
    });
  };

  document.body.addEventListener('click', (e) => {
    if (
      stateList &&
      e.target !== contactsList &&
      e.target !== selectedBlock &&
      e.target.parentNode !== selectedBlock
    ) {
      closeList();
    }
  });

  document.body.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') closeList();
  });

  openList();
};

export default toggleContactsList;
