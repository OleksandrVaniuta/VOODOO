const openFilter = document.getElementById('openFilterBtn');
const modal = document.getElementById('filterBackdrop');
const closeFilter = document.getElementById('closeFilter');

openFilter.addEventListener('click', function () {
  modal.classList.remove('hiddenFilter');
  document.body.style.overflow = 'hidden';
  modal.style.overflowY = 'auto';
});

closeFilter.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('asdasd');
  modal.classList.add('hiddenFilter');
  document.body.style.overflow = 'auto';
  modal.style.overflowY = 'hidden';
});
