
const originalCanvas = document.querySelector("canvas")
const canvas = originalCanvas.getContext("2d");

function trapezoid(x, y) {
    canvas.beginPath();
    canvas.moveTo(x, y);
    canvas.lineTo(x + 50, y);
    canvas.lineTo(x + 70, y + 50)
    canvas.lineTo(x - 20, y + 50)
    canvas.closePath();
    canvas.stroke();
}

trapezoid(30, 30);

function diamond(x, y) {
    canvas.translate(x + 30, y + 30);
    canvas.rotate(Math.PI / 4);
    canvas.fillStyle = "red"
    canvas.fillRect(-30, -30, 60, 60);
    canvas.resetTransform();
}

diamond(140, 30);

function zigzag(x, y) {
    canvas.beginPath()
    canvas.moveTo(x, y)
    for (let i = 0; i < 8; i++) {
        canvas.lineTo(x + 80, y + i * 8 + 4);
        canvas.lineTo(x, y + i * 8 + 8)
    }
    canvas.stroke()
}

zigzag(240, 30)

function spiral(x, y) {
    let radius = 50, xCenter = x + radius, yCenter = y + radius;
    canvas.beginPath()
    canvas.moveTo(xCenter, yCenter)
    for (let i = 0; i < 300; i++) {
        let angle = i * Math.PI / 30;
        let dist = radius * i / 300;
        canvas.lineTo(xCenter + Math.cos(angle) * dist,
            yCenter + Math.sin(angle) * dist)
    }
    canvas.stroke();
}

spiral(340, 20);

function star(x, y) {
    let radius = 50; xCenter = x + radius, yCenter = y + radius;
    canvas.beginPath()
    canvas.moveTo(xCenter + radius, yCenter);
    for (let i = 1; i <= 8; i++) {
        let angle = i * Math.PI / 4;
        canvas.quadraticCurveTo(xCenter, yCenter,
            xCenter + Math.cos(angle) * radius,
            yCenter + Math.sin(angle) * radius)
    }
    canvas.fillStyle = "gold";
    canvas.fill();
}

star(440, 20)

const results = [
    { name: "Satisfied", count: 1043, color: "lightblue" },
    { name: "Neutral", count: 563, color: "lightgreen" },
    { name: "Unsatisfied", count: 510, color: "pink" },
    { name: "No comment", count: 175, color: "silver" },
]

function namedPieGraph(results) {
    let total = results.reduce((sum, { count }) => {
        return sum + count
    }, 0)

    let currentAngle = -.5 * Math.PI;
    let centerX = 300, centerY = 350;

    // for(let result of results) {
    //     let sliceAngle = (result.count / total) * 2 * Math.PI;
    //     canvas.beginPath()
    //     canvas.arc(centerX, centerY, 100,
    //                 currentAngle, currentAngle + sliceAngle)
    //     currentAngle += sliceAngle;
    //     canvas.lineTo(centerX, centerY)
    //     canvas.fillStyle = result.color;
    //     canvas.fill()
    // }

    results.forEach((result) => {
        let sliceAngle = (result.count / total) * 2 * Math.PI;
        canvas.beginPath()
        canvas.arc(centerX, centerY, 100,
            currentAngle, currentAngle + sliceAngle);

        let middleAngle = currentAngle + .5 * sliceAngle;
        let textX = Math.cos(middleAngle) * 120 + centerX;
        let textY = Math.sin(middleAngle) * 120 + centerY;
        canvas.textBaseLine = "middle"
        if (Math.cos(middleAngle) > 0) {
            canvas.textAlign = "left";
        } else {
            canvas.textAlign = "right";
        }
        canvas.font = "15px sans-serif";
        canvas.fillStyle = "black";
        canvas.fillText(result.name, textX, textY);

        currentAngle += sliceAngle;
        canvas.lineTo(centerX, centerY)
        canvas.fillStyle = result.color;
        canvas.fill();
    })
}

namedPieGraph(results)

// function bouncingBall() {
//     let lastTime = null;
//     function frame(time) {
//         if (lastTime != null) {
//             updateAnimation(Math.min(100, time - lastTime) / 1000);
//         }
//         lastTime = time;
//         requestAnimationFrame(frame);
//     }
//     requestAnimationFrame(frame);

//     let x = 100, y = 300;
//     let radius = 10;
//     let speedX = 100, speedY = 60;

//     function updateAnimation(step) {
//         canvas.clearRect(0, 0, 400, 400);
//         canvas.strokeStyle = "blue";
//         canvas.lineWidth = 4;
//         canvas.strokeRect(25, 25, 350, 350);

//         x += step * speedX;
//         y += step * speedY;
//         if (x < 25 + radius || x > 375 - radius) speedX = -speedX;
//         if (y < 25 + radius || y > 375 - radius) speedY = -speedY;
//         canvas.fillStyle = "red";
//         canvas.beginPath();
//         canvas.arc(x, y, radius, 0, 7);
//         canvas.fill();
//     }
// }

// bouncingBall()



// (function diamond() {
//     canvas.beginPath();
//     canvas.moveTo(200, 120)
//     canvas.lineTo(300, 220)
//     canvas.lineTo(200, 320)
//     canvas.lineTo(100, 220)
//     canvas.lineTo(200, 120);
//     canvas.fillStyle = 'red'
//     canvas.fill();
// })();

// (function zigzag() {
//     let amplitude = 10, limit = 100, rate = 20;
//     // const interval = setInterval(() => {
//         // canvas.clearRect(0, 0, originalCanvas.width, originalCanvas.height)
//         canvas.beginPath()
//         const height = 330;
//         limit -= 1;
//         if(amplitude < limit) {
//             amplitude++;
//         } else {
//             amplitude--;
//         }
//         console.log(amplitude, limit)
//         for(let x = 10; x <= 500 ; x += 2 * amplitude){
//             canvas.moveTo(0, height + x)
//             canvas.lineTo(100, height + x + amplitude)
//             canvas.lineTo(0, height + x + (2 * amplitude));
//         }
//         canvas.stroke();
// })();

// (function spiral() {
//     canvas.beginPath()
//     // let x = 350, y = 350;
//     canvas.moveTo(350,350);
//     for(let i = 0; i <= 720; i++) {
//         // canvas.moveTo(x,y);
//         let angle = .1 * i;
//         let x = (1+angle)*Math.cos(angle);
//         let y = (1+angle)*Math.sin(angle);
//         canvas.lineTo(x + 350, y + 350);
//     }
//     canvas.stroke();
// })();

// (function star() {
//     canvas.beginPath()
//     let xStart = 350, yStart = 500;
//     canvas.moveTo(xStart, yStart);
//     canvas.quadraticCurveTo(xStart + 25, yStart + 500, xStart + 200, yStart)
//     canvas.stroke();
// })()



