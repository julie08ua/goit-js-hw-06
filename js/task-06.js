const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', (event) =>
    event.currentTarget.value.trim().length === Number(validationInput.dataset.length)
        ? validationInput.classList.add('valid')
        : validationInput.classList.add('invalid')
)



