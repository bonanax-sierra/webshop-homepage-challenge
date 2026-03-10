/**
 * main.js — D1 Skincare Web Shop
 *
 * Responsibilities:
 *  1. Mobile off-canvas menu open/close
 *  2. Navbar sticky shadow on scroll
 */

(function () {
  'use strict';

  // Initialize Foundation if jQuery + plugin are present
  if (window.jQuery && typeof jQuery.fn.foundation === 'function') {
    jQuery(document).foundation();
  }

  // --- Off-canvas mobile menu ---
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose  = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay    = document.getElementById('overlay');

  function openMenu() {
    if (!mobileMenu || !overlay) return;
    mobileMenu.classList.add('is-open');
    overlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!mobileMenu || !overlay) return;
    mobileMenu.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openMenu);
  if (menuClose)  menuClose.addEventListener('click', closeMenu);
  if (overlay)    overlay.addEventListener('click', closeMenu);

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  // --- Navbar scroll shadow ---
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

})();