
const circle = document.querySelector("circle")
circle.setAttribute("fill", "cyan")

const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

context.fillStyle = "blue"
context.fillRect(10, 50, 100, 100)

const secondCanvas = document.querySelector(".second-canvas").getContext("2d")
secondCanvas.strokeStyle = "blue";
secondCanvas.strokeRect(5,5,50,50);
secondCanvas.lineWidth = 5;
secondCanvas.strokeRect(135, 5, 50, 50)

const thirdCanvas = document.querySelector(".third-canvas").getContext("2d");

thirdCanvas.beginPath();
thirdCanvas.moveTo(50, 10);
thirdCanvas.lineTo(10, 70)
thirdCanvas.lineTo(90, 70)
thirdCanvas.fill()

const fourthCanvas = document.querySelector(".fourth-canvas").getContext("2d")
fourthCanvas.beginPath();
for(let y = 10; y < 500; y += 10) {
    fourthCanvas.moveTo(10, y);
    fourthCanvas.lineTo(111, y);
}
fourthCanvas.stroke();

const fifthCanvas = document.querySelector(".fifth-canvas").getContext("2d")

fifthCanvas.beginPath();
fifthCanvas.moveTo(50, 10);
fifthCanvas.lineTo(10, 70)
fifthCanvas.lineTo(90, 70)
fifthCanvas.fill()

const sixthCanvas = document.querySelector(".sixth-canvas").getContext("2d")

sixthCanvas.beginPath();
sixthCanvas.moveTo(10, 90)
sixthCanvas.quadraticCurveTo(60, 10, 90, 90);
sixthCanvas.lineTo(60, 10)
sixthCanvas.closePath()
sixthCanvas.stroke()

const seventhCanvas = document.querySelector(".seventh-canvas").getContext("2d");

seventhCanvas.beginPath();
seventhCanvas.moveTo(10, 90);
seventhCanvas.bezierCurveTo(10, 10, 90, 10, 50, 90);
seventhCanvas.lineTo(90, 10);
seventhCanvas.lineTo(10, 10)
seventhCanvas.closePath();
seventhCanvas.stroke();

const eightCanvas = document.querySelector(".eight-canvas").getContext("2d")

eightCanvas.beginPath();
eightCanvas.arc(50, 50, 40, 0, 7);
eightCanvas.arc(150, 50, 40, 0, .5 * Math.PI);
eightCanvas.stroke();

const results = [
    {name: "Satisfied", count: 1043, color: "lightblue"},
    {name: "Neutral", count: 563, color: "lightgreen"},
    {name: "Unsatisfied", count: 510, color: "pink"},
    {name: "No comment", count: 175, color: "silver"},
]

const ninthCanvas = document.querySelector(".ninth-canvas").getContext("2d");

document.querySelector(".ninth-canvas").setAttribute("width", 200)
document.querySelector(".ninth-canvas").setAttribute("height", 200)

const total = results.reduce((sum, {count}) => {
    console.log(sum, count);
    return sum + count;
},0)

let currentAngle = -.5 * Math.PI;
for(let result of results) {
    const sliceAngle = (result.count / total) * 2 * Math.PI;
    ninthCanvas.beginPath();

    ninthCanvas.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);

    currentAngle += sliceAngle;

    ninthCanvas.lineTo(100, 100);
    ninthCanvas.fillStyle = result.color;
    ninthCanvas.fill()
}

const tenthCanvas = document.querySelector(".tenth-canvas").getContext("2d");

tenthCanvas.font = "28px Georgia";
tenthCanvas.fillStyle = "fuchsia";
tenthCanvas.fillText("I can draw text, too!", 10, 50);



const eleventhCanvas = document.querySelector(".eleventh-canvas").getContext("2d");

eleventhCanvas.fillStyle = "blue"
eleventhCanvas.fillRect(10, 10, 100, 100)

const img = document.createElement("img");
img.src = "img/hat.png";
img.width = "50px";
img.height = "50px";
img.addEventListener("load", () => {
    for(let x = 10; x < 200; x += 30) {
        eleventhCanvas.drawImage(img, x, 10);
    }
})

const twelfthCanvas = document.querySelector(".twelfth-canvas").getContext("2d")

const img2 = document.createElement("img");
img2.src = "img/player.png";
let spriteW = 24, spriteH = 30;
img2.addEventListener("load", () => {
    let cycle = 0; 
    setInterval(() => {
        //clear rect removes the old pixels
        twelfthCanvas.clearRect(0,0, spriteW, spriteH);
        // clear 
        twelfthCanvas.drawImage(img2,
                                cycle * spriteW, 0, spriteW, spriteH, 0, 0,
                                spriteW, spriteH);
        cycle = (cycle + 1) % 8;
    }, 120)
})

const thirteenthCanvas = document.querySelector(".thirteenth-canvas").getContext("2d");

thirteenthCanvas.scale(3, .5);
thirteenthCanvas.beginPath();
thirteenthCanvas.arc(50, 50, 40, 0 ,7);
thirteenthCanvas.lineWidth = 3;
thirteenthCanvas.stroke();

function flipHorizontally(context, around) {
    context.translate(around, 0);
    context.scale(-1, 1);
    context.translate(-around, 0)
}

const fourteenthCanvas = document.querySelector(".fourteenth-canvas").getContext("2d")

const img3 = document.createElement("img");

img3.src = "img/player.png";

let spriteW2 = 24, spriteH2 = 30;
img3.addEventListener("load", () => {
    flipHorizontally(fourteenthCanvas, 100 + spriteW2/2);
    fourteenthCanvas.drawImage(img3, 0 , 0, spriteW2, spriteH2, 100, 0 , spriteW2, spriteH2);
})

const fifteenthCanvas = document.querySelector(".fifteenth-canvas").getContext("2d");



function branch(length, angle, scale, min = 8) {
    fifteenthCanvas.fillRect(0, 0, 1, length);
    if(length < min) return;
    fifteenthCanvas.save();
    fifteenthCanvas.translate(0, length);
    fifteenthCanvas.rotate(-angle);
    branch(length * scale, angle, scale, min);
    fifteenthCanvas.rotate(2 * angle);
    branch(length * scale, angle, scale, min);
    fifteenthCanvas.restore();
}
fifteenthCanvas.translate(300, 0);
branch(100, .4, .8, 2)



