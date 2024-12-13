'use strict';

const modal = document.querySelector('.callback-modal-backdrop');
const mobileMenu = document.querySelector('.mobile-nav-items');
const modalOpenTrigger = document.querySelector('.action.trigger-modal');
const menuOpenTrigger = document.querySelector('.mobile-burger-trigger');
const modalCloseTrigger = document.querySelector('.callback-modal .close-modal');
const mobileMenuCloseTrigger = document.querySelector('.mobile-nav-items .close-modal');

const modalObserver = new MutationObserver((mutations, observer) => {
  for (const mutation of mutations) {
    const {attributeName} = mutation;

    if (attributeName === 'class') {
      document.body.style.overflow = modal.classList.contains('is-open') ? 'hidden' : '';
    }
  }
});

const mobileMenuObserver = new MutationObserver((mutations, observer) => {
  for (const mutation of mutations) {
    const {attributeName} = mutation;

    if (attributeName === 'class') {
      document.body.style.overflow = mobileMenu.classList.contains('is-open') ? 'hidden' : '';
    }
  }
});

modalObserver.observe(modal, {
  attributes: true
});

mobileMenuObserver.observe(mobileMenu, {
  attributes: true
});

modalCloseTrigger.addEventListener('click', () => {
  modal.classList.remove('is-open');
  document.body.style.overflow = 'hidden';
});

mobileMenuCloseTrigger.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = 'hidden';
});

if (modalOpenTrigger) {
  modalOpenTrigger.addEventListener('click', () => {
    modal.classList.add('is-open');
  });
}

menuOpenTrigger.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

