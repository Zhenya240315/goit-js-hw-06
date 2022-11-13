let arrBoxes = [];
let boxSize = 30;
let numberOfboxes = 0;

const form = document.querySelector('#controls');
const divForBoxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const desroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', () => {
  divForBoxes.insertAdjacentHTML('beforeend', arrBoxes.join(''));
  arrBoxes = [];
});

desroyBtn.addEventListener('click', () => {
  divForBoxes.innerHTML = '';
  boxSize = 30;
});

form.firstElementChild.addEventListener('blur', (event) => {
  numberOfboxes = Number(event.currentTarget.value);
  let counter = 0;
  while (counter < numberOfboxes) {
    arrBoxes.push(`<div style='background-color: ${getRandomHexColor()}; height: ${boxSize}`);
    counter += 1;
    boxSize += 10;
  }
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
