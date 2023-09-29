window.addEventListener('mousemove', event => {
    updateCounterContent(event.clientX, event.clientY)
});

function updateCounterContent(x, y) {
    value = document.getElementById('counter');
    value.innerHTML = `${x}, ${y}`;
    moveTo(value, x, y);
    if (isOnCorner(value)) {
        alert('You are on a corner!');
        value.innerHTML = 'CORNER';
    }
}

function moveTo(elem, x, y) {
    elem.style = `
    position: absolute;
    top: ${y}px;
    left: ${x}px;
    transform: translate(-50%, -50%);
    `
}

function isOnEdge(elem) {
    var bounding = elem.getBoundingClientRect();
    return (bounding.top < 0 ||
            bounding.left < 0 || 
            bounding.bottom > window.innerHeight ||
            bounding.right > window.innerWidth);
}

function isOnCorner(elem) {
    var bounding = elem.getBoundingClientRect();
    return (bounding.top < 0 && bounding.left < 0 ||
            bounding.bottom > window.innerHeight && bounding.right > window.innerWidth);
}
