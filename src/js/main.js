import '../scss/main.scss';

import '../images/sc-logo.png';
import '../images/sc_1.jpg';
import '../images/sc_2.jpg';

import { dom } from './modules/dom';
import { setAttr } from './modules/attr';
// import { setupMenu } from './modules/menu';

// const menuToggle = dom('.menu-toggle');
// const menu = dom(`#${getAttr('aria-controls', menuToggle)}`);

// setupMenu(menu, menuToggle);

const logo = dom('[data-logo]');
const parent = dom('[data-fixed]');

const manageHeader = bottom => () => {
  if (bottom <= window.scrollY) {
    setAttr('data-fixed', true, parent);
  } else {
    setAttr('data-fixed', false, parent);
  }
};

if (logo && parent) {
  const { bottom } = logo.getBoundingClientRect();
  const handleHeader = manageHeader(bottom + window.scrollY);
  handleHeader();
  window.addEventListener('scroll', handleHeader);
}
