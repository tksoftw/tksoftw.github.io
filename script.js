let xVelocityDVD = 1;
let yVelocityDVD = 1;

let isInLoop = false;


document.addEventListener('mousedown', () => {
    if ( !isInLoop ) { moveDVDLoop(); isInLoop=true;}
});

function moveDVDLoop() {
    changeBgColor('#101010');
    setInterval(moveDVD, 10);
}

function changeBgColor(color) {
    document.body.style.backgroundColor = color;
}

function moveDVD() {
    let dvd = document.getElementById('dvd');
    if (isOnCorner(dvd)) {
        xVelocityDVD *= -1;
        yVelocityDVD *= -1;
    }
    else if (isOnEdge(dvd)) {
        let v = getEdgeVelocityVector(dvd);
        xVelocityDVD *= v[0];
        yVelocityDVD *= v[1];
    }
    pushBy(dvd, xVelocityDVD, -yVelocityDVD);
}

function moveTo(elem, x, y) {
    elem.style.left = `${x}px`;
    elem.style.top = `${y}px`;
}

function updateDisplay(x, y) {
    element = document.getElementById('display');
    element.innerHTML = `(${x}, ${y})`;
}

function pushBy(elem, deltaX, deltaY) {
    style = window.getComputedStyle(elem);
    // Assuming elem.style.left and elem.style.top are already set
    let x = parseInt(style.left) + deltaX;
    let y = parseInt(style.top) + deltaY;
    updateDisplay(x, isInLoop);
    moveTo(elem, x, y);
}

function isOnEdge(elem) {
    let bounding = elem.getBoundingClientRect();
    return (bounding.top < 0 ||
            bounding.left < 0 || 
            bounding.bottom > window.innerHeight ||
            bounding.right > window.innerWidth);
}

function isOnCorner(elem) {
    let bounding = elem.getBoundingClientRect();
    return (bounding.top < 0 && bounding.left < 0) ||
            (bounding.top < 0 && bounding.right > window.innerWidth) ||
            (bounding.bottom > window.innerHeight && bounding.left < 0) ||
            (bounding.bottom > window.innerHeight && bounding.right > window.innerWidth);
}

function getEdgeVelocityVector(elem) {
    // assuming elem is on edge
    let bounding = elem.getBoundingClientRect();
    if (bounding.left < 0 || bounding.right > window.innerWidth) {
        return [-1, 1];
    }
    else if (bounding.top < 0 || bounding.bottom > window.innerHeight) {
        return [1, -1];
    }
}
