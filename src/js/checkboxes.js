const checkboxesColor = document.querySelectorAll('input[id="color"]');

checkboxesColor.forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    const svg = this.parentNode.querySelector('svg');
    svg.classList.toggle('opacity-0', !this.checked);
    svg.classList.toggle('opacity-100', this.checked);
  });
});

const checkboxesSize = document.querySelectorAll('input[id="size"]');
const labels = document.querySelectorAll('label[id="size"]');
const textSizes = document.querySelectorAll('p[id="size"]');

checkboxesSize.forEach((checkboxSize, index) => {
  checkboxSize.addEventListener('change', function () {
    if (this.checked) {
      labels[index].classList.add('bg-mainBlack', 'text-mainWhite');

      textSizes[index].style.opacity = 1;
    } else {
      labels[index].classList.remove('bg-mainBlack', 'text-mainWhite');

      textSizes[index].style.opacity = 0.6;
    }
  });
});

const acordion = document.querySelectorAll('#acordionItem');

acordion.forEach(item => {
  item.addEventListener('click', function () {
    if (item.nextElementSibling.classList.contains('active')) {
      item.parentNode.querySelector('svg').classList.remove('active');
      item.nextElementSibling.classList.remove('active');
    } else {
      item.parentNode.querySelector('svg').classList.add('active');
      item.nextElementSibling.classList.add('active');
    }
  });
});

const radioButtons = document.querySelectorAll('input[id="sizeRadio"]');

radioButtons.forEach(radio => {
  radio.addEventListener('change', function () {
    if (this.checked) {
      this.parentElement.classList.add('bg-mainBlack', 'text-mainWhite');
    } else {
      this.parentElement.classList.remove('bg-mainBlack', 'text-mainWhite');
    }

    radioButtons.forEach(btn => {
      if (btn !== this && !btn.checked) {
        btn.parentElement.classList.remove('bg-mainBlack', 'text-mainWhite');
      }
    });
  });
});

const colorRadioBtns = document.querySelectorAll('input[id="colorRadio"]');
const svgs = document.querySelectorAll('svg[id=checkSvg]');

colorRadioBtns.forEach((radio, index) => {
  radio.addEventListener('change', function () {
    svgs.forEach((svg, svgIndex) => {
      if (index === svgIndex) {
        if (this.checked) {
          svg.classList.remove('opacity-0');
          svg.classList.add('opacity-100');
        } else {
          svg.classList.remove('opacity-100');
          svg.classList.add('opacity-0');
        }
      } else {
        svg.classList.remove('opacity-100');
        svg.classList.add('opacity-0');
      }
    });
  });
});
