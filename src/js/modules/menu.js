import { eventOn } from './event';
import { setAttr, attrToBool } from './attr';
import { saveScroll } from './saveScroll';

function toggleMenu(menu) {
  return function() {
    const menuOpen = attrToBool('data-menu-open', menu);
    setAttr('data-menu-open', !menuOpen, menu);
    saveScroll(menu)(!menuOpen);
  };
}

export function setupMenu(menu, menuToggle) {
  eventOn('click', toggleMenu(menu), menuToggle);
}
