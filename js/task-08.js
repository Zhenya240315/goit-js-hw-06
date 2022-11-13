const form = document.guerySelector('.login-form');
form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('Будь ласка заповніть всі поля!');
    }
    console.log({ Email: email.value, Password: password.value });
    event.currentTarget.reset();
}