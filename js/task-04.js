let counterValue = 0;
const counter = document.guerySelector('#value');
const decrementBtn = document.guerySelector('button[data-action="decremen"]');
const incrementBtn = document.guerySelector('button[data-action="increment"]');

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