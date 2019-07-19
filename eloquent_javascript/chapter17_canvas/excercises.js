
const canvas = document.querySelector("canvas").getContext("2d");

(function trapezoid() {
    canvas.beginPath();
    canvas.moveTo(200, 0);
    canvas.lineTo(230, 100)
    canvas.lineTo(100, 100)
    canvas.lineTo(130, 0)
    canvas.lineTo(200, 0)
    canvas.strokeStyle = "black"
    canvas.lineWidth = 3;
    canvas.stroke()
})();

(function diamond() {
    canvas.beginPath();
    canvas.moveTo(200, 120)
    canvas.lineTo(300, 220)
    canvas.lineTo(200, 320)
    canvas.lineTo(100, 220)
    canvas.lineTo(200, 120);
    canvas.fillStyle = 'red'
    canvas.fill();
})();

(function zigzag() {
    canvas.beginPath()
    const height = 330, amplitude = 25;
    for(let x = 10,y = 10; y <= 500; y += 50, x += 30) {
        canvas.moveTo(0, height + y)
        canvas.lineTo(100, height + y + amplitude)
        canvas.lineTo(0, height + y + (2 * amplitude));
    }
    canvas.stroke();
})();

(function circle() {
    canvas.beginPath()
    canvas.moveTo(200, 330);
    for(let x = 0; x < 100; x++) {
        canvas.lineTo(x, x)
        canvas.lineTo(-x, -x);
    }
    canvas.stroke();
})();



