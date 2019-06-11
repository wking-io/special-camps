import '../scss/main.scss';

import '../images/sc-logo.png';
import '../images/sc_1.jpg';
import '../images/sc_2.jpg';

import { dom } from './modules/dom';
import { getAttr } from './modules/attr';
import { setupMenu } from './modules/menu';

const menuToggle = dom('.menu-toggle');
const menu = dom(`#${getAttr('aria-controls', menuToggle)}`);

setupMenu(menu, menuToggle);
