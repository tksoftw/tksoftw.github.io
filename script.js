window.addEventListener('mousemove', event => {
    updateCounterContent(event.clientX, event.clientY)
});

function updateCounterContent(x, y) {
    value = document.getElementById('counter');
    value.innerHTML = `${x}, ${y}`;
}

function moveTo(elem, x, y) {
    elem.style.center = 
}

function isOnEdge(elem) {
    var bounding = elem.getBoundingClientRect();
    return (bounding.top < 0 ||
            bounding.left < 0 || 
            bounding.bottom > window.innerHeight ||
            bounding.right > window.innerWidth);
}
