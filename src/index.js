import itemsTemplate from './templates/gallary-items.hbs';
import menuItems from './menu.json';
import * as themeModule from './js/theme';
import './styles.css';

const markup = itemsTemplate(menuItems);

const gallaryRef = document.querySelector('.js-menu');

gallaryRef.insertAdjacentHTML('beforeend', markup);
