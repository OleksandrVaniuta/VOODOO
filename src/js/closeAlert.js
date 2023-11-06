const closeBtn = document.getElementById('closeAlert');
const alerWindow = document.getElementById('alert');
const header = document.getElementById('marginTop');

closeBtn.addEventListener('click', function () {
  alerWindow.style.display = 'none';
  header.style.marginTop = 0;
});
