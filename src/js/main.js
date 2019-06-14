import '../scss/main.scss';

import '../images/sc-logo.svg';
import '../images/sc_1.jpg';
import '../images/sc_2.jpg';

import '../font/league-gothic.otf';

import { dom } from './modules/dom';
import { setAttr } from './modules/attr';
import { pipe } from './modules/utils';

if (window.innerWidth > 768) {
  const logo = dom('[data-logo]');
  const logoPos = logo.getBoundingClientRect();
  const header = dom('[data-fixed]');

  const manageHeader = (pos, parent) => e => {
    if (pos <= window.scrollY) {
      setAttr('data-fixed', true, parent);
    } else {
      setAttr('data-fixed', false, parent);
    }

    return e;
  };

  const slideItem = dom('[data-slide-item]');
  const slide = dom('[data-slide');

  const manageSlide = (parent, item, halfItem) => e => {
    const { top, bottom } = parent.getBoundingClientRect();
    const parentTop = top + halfItem;
    const parentBottom = bottom - halfItem;
    const centerScreen = window.innerHeight / 2;
    if (parentTop <= centerScreen && parentBottom >= centerScreen) {
      setAttr('data-slide-state', 'fixed', item);
    } else if (parentBottom <= centerScreen) {
      setAttr('data-slide-state', 'bottom', item);
    } else {
      setAttr('data-slide-state', 'top', item);
    }

    return e;
  };

  if (logo && header && slideItem && slide) {
    const handleHeader = manageHeader(logoPos.bottom + window.scrollY, header);
    const handleSlide = manageSlide(
      slide,
      slideItem,
      slideItem.offsetHeight / 2
    );
    handleHeader();
    handleSlide();
    window.addEventListener('scroll', pipe(handleHeader, handleSlide));
  }
}
