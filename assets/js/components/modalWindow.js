'use strict';

export default function modalWindow() {
  modalWindowInit();
}

function modalWindowInit() {
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');

  const script = document.querySelector('script');

  document.body.insertBefore(modalOverlay, script);
}
