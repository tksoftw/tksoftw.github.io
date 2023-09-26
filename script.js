window.addEventListener('mousemove', event => {
    updateCounterContent(event.clientX, event.clientY)
});

function updateCounterContent(x, y) {
    value = document.getElementById('counter');
    value.innerHTML = `${x}, ${y}`;
}
