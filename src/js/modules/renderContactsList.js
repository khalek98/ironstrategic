import { closeList } from './toggleContactsList';

const transformMapScale = (map, e) => {
  const viewWidth =
    e?.target?.outerWidth || +window.getComputedStyle(document.body).width.replace(/\D/g, '');

  if (viewWidth > 768 && viewWidth < 991) {
    map.style.transform = `
    translateX(-32%)
     scale(${(viewWidth / 100) * 0.12})
    `;
  } else if (viewWidth >= 1200) {
    map.style.transform = 'none';
  } else if (viewWidth > 991 && viewWidth < 1200) {
    map.style.transform = `
    translateX(-30%)
     scale(1.1)
    `;
  } else {
    map.style.transform = `
    translateX(-27%)
     scale(${(viewWidth / 100) * 0.12})
    `;
  }
};

const renderContactsList = (list) => {
  const contactsList = document.querySelector('.footer-block__list'),
    selectedText = document.querySelector('.footer-block__selected span'),
    mailElem = document.querySelector('.footer-block__email'),
    mailText = document.querySelector('.footer-block__email span'),
    map = document.querySelector('.footer-map');

  const points = [];
  const elements = [];
  let activePoint;

  const setContinent = (e, item, point, elem) => {
    if (e.code && e.code !== 'Enter') return;
    selectedText.innerHTML = item.continent;
    mailText.innerText = item.mail;
    mailText.href = `mailto:${item.mail}`;

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

    elements.forEach((elemItem) => {
      elemItem.classList.remove('footer-block__item_active');
    });
    elem.classList.add('footer-block__item_active');

    activePoint = point;
    closeList(contactsList);
  };

  list.forEach((item, i) => {
    const elem = document.createElement('li');
    const point = document.createElement('div');
    elem.innerHTML = item.continent;
    elem.classList.add('footer-block__item');
    elem.setAttribute('tabindex', 0);
    elem.addEventListener('click', (e) => setContinent(e, item, point, elem));
    elem.addEventListener('keydown', (e) => setContinent(e, item, point, elem));

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
      elem.classList.add('footer-block__item_active');
      point.classList.add('footer-map__point', 'footer-map__point_active');
      point.style.cssText = `
      top: ${item.location.top - 11}px;
      left: ${item.location.left - 6}px;
    `;
      activePoint = point;
    } else {
      point.classList.add('footer-map__point');
      point.style.cssText = `
      top: ${item.location.top}px;
      left: ${item.location.left}px;
    `;
    }

    point.addEventListener('click', (e) => {
      setContinent(e, item, point, elem);
    });

    contactsList.appendChild(elem);
    elements.push(elem);
    map.appendChild(point);
    points.push(point);
  });

  mailElem.addEventListener('click', () => navigator.clipboard.writeText(mailText.innerText));
  window.addEventListener('resize', (e) => transformMapScale(map, e));

  transformMapScale(map);
};

export default renderContactsList;
