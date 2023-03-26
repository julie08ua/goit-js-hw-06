const fontSizeControlInput = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

fontSizeControlInput.addEventListener('input', (event) =>
    textSpan.style.fontSize = `${event.currentTarget.value}px`
)