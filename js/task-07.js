const inputRange = document.guerySelector('#font-size-control');
const textEL = document.guerySelector('#text');

inputRange.addEventListener('input', (event) => {
    textEL.style.fontSize = `${event.currentTarget.value}px`;
});