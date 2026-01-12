const img = new Image();
img.src = "images/coolguy.png"; // ← put your image path here

let x = -100;
let y = 500;
let speed = 5;

let change = 0;
let direction = 0;

let upnDown = 3;

const c = document.getElementById("myCanvas");
c.width = c.clientWidth;
c.height = c.clientHeight;
const ctx = c.getContext("2d");

img.onload = () => {
    setInterval(changePosition, 15);
};

function changePosition() {
    ctx.clearRect(0, 0, c.width, c.height);

    x += speed;
    y += upnDown;

    ctx.save();

    ctx.beginPath();
    ctx.arc(x, y, 80, 0, Math.PI * 2);
    ctx.clip();

    ctx.drawImage(img, x - 80, y - 80, 160, 160);

    ctx.restore();
    change += 1;

    if(x >= c.width + 100){
        x = -100
        y = 500
    }

    if(change === 10){
        change = 0;
        direction = Math.floor(Math.random() * 2)

        if(direction === 0) {
            upnDown = 7;
        } else if (direction === 1) {
            upnDown = -7;
        }
    }
}

let mouseX = 0;
let mouseY = 0;

c.addEventListener("mousemove", (e) => {
    const rect = c.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
});

function isMouseOverCircle() {
    const dx = mouseX - x;
    const dy = mouseY - y;
    return Math.sqrt(dx * dx + dy * dy) <= 80;
}

let pointScore = 0;
const points = document.getElementById("points");

setInterval(() => {
    if (isMouseOverCircle()) {
        pointScore++;
        console.log(pointScore);
        points.innerText = pointScore;
    }
}, 1); // change 50 to control score speed