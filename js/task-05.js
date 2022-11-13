const messageInput = document.guerySelector('#name-input');
const messageName = document.guerySelector('#name-output');

messageInput.addEventListener('inpyt', (event) => {
    if (event.currentTarget.value === '') {
        messageName.textContent = 'Anonymous';
    } else {
        messageName.textContent = event.currentTarget.value;
    }
});