let counterValue = 0;
const counter = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const render = () => {
    counter.textContent = counterValue;
};

const incrementClick = () => {
    counterValue += 1;
    render();
};

const decrementClick = () => {
    counterValue -= 1;
    render();
};
render();

decrementBtn.addEventListener('click', decrementClick);
incrementBtn.addEventListener('click', incrementClick);