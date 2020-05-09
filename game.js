// JAVASCRIPT CODE //

// Canvas elements
const cvs = document.getElementById("Bird");
const ctx = cvs.getContext("2d");

// Game Variables
let frames = 0;


// draw function
function draw() {
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, cvs.width, cvs.height);

}


// update function
function update() {

}


//loop function
function loop() {
    update();
    draw();
    frames++;
    requestAnimationFrame(loop);
}
loop();