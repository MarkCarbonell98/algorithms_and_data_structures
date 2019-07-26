function bouncingBall() {
    let lastTime = null;
    function frame(time) {
        if (lastTime != null) {
            updateAnimation(Math.min(100, time - lastTime) / 1000);
        }
        lastTime = time;
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    let x = 100, y = 300;
    let radius = 10;
    let speedX = 100, speedY = 60;

    function updateAnimation(step) {
        canvas.clearRect(0, 0, 400, 400);
        canvas.strokeStyle = "blue";
        canvas.lineWidth = 4;
        canvas.strokeRect(25, 25, 350, 350);

        x += step * speedX;
        y += step * speedY;
        if (x < 25 + radius || x > 375 - radius) speedX = -speedX;
        if (y < 25 + radius || y > 375 - radius) speedY = -speedY;
        canvas.fillStyle = "red";
        canvas.beginPath();
        canvas.arc(x, y, radius, 0, 7);
        canvas.fill();
    }
}

bouncingBall()