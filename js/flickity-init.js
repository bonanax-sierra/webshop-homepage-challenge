/**
 * flickity-init.js
 * Initializes Flickity carousels with autoplay and dot navigation.
 */

(function () {
  'use strict';

  if (typeof Flickity === 'undefined') return;

  var productCarousel = document.querySelector('.products__carousel');

  if (productCarousel) {
    // eslint-disable-next-line no-new
    new Flickity(productCarousel, {
      cellAlign: 'left',
      contain: true,
      pageDots: true,
      prevNextButtons: true,
      groupCells: false,
      wrapAround: true,
      autoPlay: 4000,
      pauseAutoPlayOnHover: true,
      imagesLoaded: true
    });
  }
})();

