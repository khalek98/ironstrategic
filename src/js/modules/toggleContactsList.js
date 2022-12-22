export const closeList = (modal) => {
  setTimeout(() => (modal.style.display = "none"), 400);
  modal.style.animation = "0.4s ease-in-out 0s 1 normal none running closeList";
};

export const openList = (modal, e) => {
  if (e.code && e.code !== "Enter") return;
  if (modal.style.display === "grid") {
    setTimeout(() => (modal.style.display = "none"), 400);
    modal.style.animation = "0.4s ease-in-out 0s 1 normal none running closeList";
  } else {
    modal.style.display = "grid";
    modal.style.animation = "0.4s ease-in-out 0s 1 normal none running openList";
  }
};

const openByEvent = (trigger, modal, action) => {
  trigger.addEventListener(action, (e) => openList(modal, e));
};

const toggleContactsList = () => {
  const selectedBlock = document.querySelector(".footer-block__selected"),
    contactsList = document.querySelector(".footer-block__list");

  document.body.addEventListener("click", (e) => {
    if (
      e.target !== contactsList &&
      e.target !== selectedBlock &&
      e.target.parentNode !== selectedBlock
    ) {
      closeList(contactsList);
    }
  });

  document.body.addEventListener("keydown", (e) => {
    if (e.code === "Escape") closeList(contactsList);
  });

  // openList(contactsList);
  openByEvent(selectedBlock, contactsList, "click");
  openByEvent(selectedBlock, contactsList, "keydown");
};

export default toggleContactsList;
