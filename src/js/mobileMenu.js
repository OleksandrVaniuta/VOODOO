const openBtn = document.getElementById('burger');
const menu = document.getElementById('mobileMenu');
const closeMenuBtn = document.getElementById('closeMenu');

if (openBtn !== null) {
  openBtn.addEventListener('click', function () {
    menu.classList.add('mobileMenuActive');
    document.body.style.overflow = 'hidden';
  });
}

if (closeMenuBtn !== null) {
  closeMenuBtn.addEventListener('click', function () {
    menu.classList.remove('mobileMenuActive');
    document.body.style.overflow = 'auto';
  });
}
