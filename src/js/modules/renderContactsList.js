import { closeList } from './toggleContactsList';

const renderContactsList = (list) => {
  const contactsList = document.querySelector('.footer-block__list'),
    selectedText = document.querySelector('.footer-block__selected span'),
    mailElem = document.querySelector('.footer-block__email'),
    mailText = document.querySelector('.footer-block__email span'),
    map = document.querySelector('.footer-map');

  mailElem.addEventListener('click', () => {
    navigator.clipboard.writeText(mailText.innerText);
  });

  const points = [];
  let activePoint;

  const setContinent = (e, item, point) => {
    if (e.code && e.code !== 'Enter') return;
    selectedText.innerHTML = item.continent;
    mailText.innerText = item.mail;
    mailText.href = `mailto:${item.mail}`;
    if (point) {
      points.forEach((pointItem, i) => {
        pointItem.classList.remove('footer-map__point_active');
        pointItem.style.cssText = `
          top: ${list[i].location.top}px;
          left: ${list[i].location.left}px;
        `;
      });
      point.classList.add('footer-map__point_active');
      point.style.cssText = `
      top: ${item.location.top - 11}px;
      left: ${item.location.left - 6}px;
    `;
    }
    activePoint = point;
    closeList(contactsList);
  };

  list.forEach((item, i) => {
    const elem = document.createElement('li');
    const point = document.createElement('div');
    elem.innerHTML = item.continent;
    elem.classList.add('footer-block__item');
    elem.setAttribute('tabindex', 0);
    elem.addEventListener('click', (e) => setContinent(e, item, point));
    elem.addEventListener('keydown', (e) => setContinent(e, item, point));

    point.addEventListener('mouseenter', () => {
      point.classList.add('footer-map__point', 'footer-map__point_active');
      point.style.cssText = `
      top: ${item.location.top - 11}px;
      left: ${item.location.left - 6}px;
    `;
    });
    point.addEventListener('mouseleave', () => {
      if (activePoint === point) return;
      point.classList.remove('footer-map__point_active');
      point.style.cssText = `
      top: ${item.location.top}px;
      left: ${item.location.left}px;
    `;
    });

    if (i === 0) {
      point.classList.add('footer-map__point', 'footer-map__point_active');
      point.style.cssText = `
      top: ${item.location.top - 11}px;
      left: ${item.location.left - 6}px;
    `;
    } else {
      point.classList.add('footer-map__point');
      point.style.cssText = `
      top: ${item.location.top}px;
      left: ${item.location.left}px;
    `;
    }

    point.addEventListener('click', (e) => {
      setContinent(e, item, point);
    });

    contactsList.appendChild(elem);
    map.appendChild(point);
    points.push(point);
  });
};

export default renderContactsList;
