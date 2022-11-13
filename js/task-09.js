const colorTitle = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', () => {
  let randomColor = getRandomHexColor();
  colorTitle.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
  console.log(randomColor);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
