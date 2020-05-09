// JAVASCRIPT CODE //
const cvs = document.getElementById("Bird");
const ctx = cvs.getContext("2d");
let frames = 0;

function draw() {
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, cvs.width, cvs.height);

}

function update() {

}

function loop() {
    update();
    draw();
    frames++;
    requestAnimationFrame(loop);
}
loop();