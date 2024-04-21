'use strict';

export default function filter() {
  const filterMobileBtn = document.querySelector('button.filter-btn');
  const filterMobileContent = document.querySelector('.filter-content');

  filterMobileBtn.addEventListener('click', () => {
    if (filterMobileContent.classList.contains('filter-content-open')) {
      filterMobileContent.style = '';
      filterMobileContent.classList.remove('filter-content-open');
    } else {
      filterMobileContent.classList.add('filter-content-open');
      const options = filterMobileContent.querySelectorAll('.filter-option');
      let totalHeight = 0;
      options.forEach(option => (totalHeight += option.offsetHeight));

      filterMobileContent.style.maxHeight = totalHeight + 'px';
    }
  });
}
