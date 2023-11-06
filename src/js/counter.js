const decrement = document.getElementById('decrement');
const increment = document.getElementById('increment');
const count = document.getElementById('count');

increment.addEventListener('click', changeCount);
decrement.addEventListener('click', changeCount);

function changeCount() {
  let value = parseInt(count.textContent);
  if (this.getAttribute('value') === '+') {
    value++;
    count.textContent = value;
  }
  if (value === 1) {
    return;
  }
  if (this.getAttribute('value') === '-') {
    value = value - 1;
    count.textContent = value;
  }
}
