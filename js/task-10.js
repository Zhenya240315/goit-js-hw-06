let arrBoxes = [];
let boxSize = 30;
let numberOfboxes = 0;

const form = document.guerySelector('#controls');
const divForBoxes = document.guerySelector('#boxes');
const ceateBtn = document.guerySelector('[data-create]');
const desroyBtn = document.guerySelector('[data-destroy]');

ceateBtn.addventListener('click', () => {
  divForBoxes.inserAdjacentHTML('beforeend', arrBoxes.join(''));
  arrBoxes = [];
});

desroyBtn.addventListener('click', () => {
  divForBoxes.innerHTML = '';
  arrSize = 30;
});

form.firstElementChild.addventListener('blur', (event) => {
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
