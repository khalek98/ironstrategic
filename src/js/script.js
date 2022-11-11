import toggleContactsList from './modules/toggleContactsList.js';
import renderContactsList from './modules/renderContactsList.js';

const list = [
  {
    continent: 'North America',
    mail: 'na@iron-strategic.com',
    location: {
      top: 59,
      left: 60,
    },
  },
  {
    continent: 'Europe',
    mail: 'eu@iron-strategic.com',
    location: {
      top: 56,
      left: 235,
    },
  },
  {
    continent: 'Middle East',
    mail: 'mideast@iron-strategic.com',
    location: {
      top: 108,
      left: 260,
    },
  },
  {
    continent: 'South America',
    mail: 'latin@iron-strategic.com',
    location: {
      top: 153,
      left: 107,
    },
  },
  {
    continent: 'Africa',
    mail: 'africa@iron-strategic.com',
    location: {
      top: 131,
      left: 222,
    },
  },
  {
    continent: 'Asia',
    mail: 'asia@iron-strategic.com',
    location: {
      top: 94,
      left: 349,
    },
  },
  {
    continent: 'Oceania',
    mail: 'oceania@iron-strategic.com',
    location: {
      top: 189,
      left: 409,
    },
  },
];

window.addEventListener('DOMContentLoaded', () => {
  toggleContactsList();
  renderContactsList(list);
});
