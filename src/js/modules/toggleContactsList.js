const toggleContactsList = () => {
  const selectedBlock = document.querySelector('.footer-block__selected'),
    selectedText = selectedBlock.querySelector('span'),
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

  // openList();

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
    // console.log(e.code);
    if (e.code === 'Escape') closeList();
  });

  openList();
};

export default toggleContactsList;
