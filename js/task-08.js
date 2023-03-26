const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    const data = {
        email: email.value,
        password: password.value,
    };

    (data.email && data.password)
        ? loginForm.reset()
        : alert('Bсе поля должны быть заполнены!')
    
    console.log(data);
})
