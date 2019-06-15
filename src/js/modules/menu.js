import { eventOn } from './event';
import { setAttr, attrToBool } from './attr';
import { saveScroll } from './saveScroll';

function toggleMenu(menu) {
  return function(e) {
    const menuOpen = attrToBool('aria-expanded', e.currentTarget);
    setAttr('aria-expanded', !menuOpen, e.currentTarget);
    setAttr('data-menu-open', !menuOpen, menu);
    saveScroll(menu)(!menuOpen);
  };
}

export function setupMenu(menu, menuToggle) {
  eventOn('click', toggleMenu(menu), menuToggle);
}
