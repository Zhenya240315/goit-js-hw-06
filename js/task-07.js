const inputRange = document.querySelector('#font-size-control');
const textEL = document.querySelector('#text');

inputRange.addEventListener('input', (event) => {
    textEL.style.fontSize = `${event.currentTarget.value}px`;
});