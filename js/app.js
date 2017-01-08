/**
 * Show the coordinate system on the canvas.
 * Esteban Padilla
 */

window.addEventListener('load', init, false);
function init() {

    var canvas = null;
    var context = null;

    var x = 100;
    var y = 100;
    var width = window.innerWidth;
    var height = window.innerHeight;

    canvas = createCanvas(width, height);
    canvas.addEventListener('click', clickHandler, false);
    context = canvas.getContext('2d');


    function render() {

        context.clearRect(0, 0, width, height);

        context.fillStyle = '#ee3344';
        context.fillRect(x, y, 100, 100);

        context.strokeStyle = 'white';
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.closePath();
        context.stroke();

        context.strokeStyle = 'white';
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.closePath();
        context.stroke();
    }

    function clickHandler(e) {
        x = e.layerX;
        y = e.layerY;
        console.log(x + ', ' + y);

        render();
    }

}

function createCanvas(width, height) {
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    canvas.style.background = '#2b0d3b';
    return canvas;
}