import noUiSlider from 'nouislider';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [0, 999],
  connect: true,
  tooltips: [
    {
      to: function (value) {
        return '$ ' + Math.floor(value);
      },
      from: function (value) {
        return value.replace('$ ', '');
      },
    },
    {
      to: function (value) {
        return '$ ' + Math.floor(value);
      },
      from: function (value) {
        return value.replace('$ ', '');
      },
    },
  ],
  range: {
    min: 0,
    max: 999,
  },
});
