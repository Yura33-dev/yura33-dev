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

export function generateModalLoading(loadText) {
  const modalOverlay = document.querySelector('.modal-overlay');

  let dynamicPath = '';

  window.location.host === 'yura33-dev.github.io'
    ? (dynamicPath = '/yura33-dev/')
    : (dynamicPath = '/');

  modalOverlay.innerHTML = `
    <div class="modal-content">
      <div class="modal-close">
        <p class="modal-title">Requesting...</p>
        <button type="button" class="modal-close-btn">
          <svg class="icon close-icon" width="15" height="15">
            <use href="${dynamicPath}assets/images/icons.svg#close-icon"></use>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <div class="loading">
          <svg class="load-icon" width="40" height="40">
            <use href="${dynamicPath}assets/images/icons.svg#paw-icon"></use>
          </svg>
        </div>
        <p class="modal-text">
          ${loadText}
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="modal-close-btn bg-primary">OK</button>
      </div>
    </div>
  `;

  modalOverlay.classList.add('is-open');

  const modalCloseBtns = modalOverlay.querySelectorAll('.modal-close-btn');
  modalCloseBtns.forEach(btn => btn.addEventListener('click', closeModal));
}

function closeModal(e) {
  if (e.target.closest('.modal-close-btn')) {
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.classList.remove('is-open');

    modalOverlay
      .querySelectorAll('.modal-close-btn')
      .forEach(btn => btn.removeEventListener('click', closeModal));

    modalOverlay.innerHTML = '';
  }
}

export function generateModalInfo(title, text) {
  try {
    const modalOverlay = document.querySelector('.modal-overlay');
    const loadingInModal = modalOverlay.querySelector('.loading');
    loadingInModal.remove();

    const modalTitle = modalOverlay.querySelector('.modal-title');
    modalTitle.textContent = title;

    const modalText = modalOverlay.querySelector('.modal-text');
    modalText.innerHTML = text;
  } catch (e) {}
}
