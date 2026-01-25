const img = new Image();
img.src = "images/coolguy.png"; // ← put your image path here

let x = -100;
let y = getRandom(250, 800);
let speed = 5;

let change = 0;
let changeS = 0;
let direction = 0;

let upnDown = 3;
let pointSpeed = 4;

let pointCounter = 0;

let radius = 80;

let bet = 0;


const c = document.getElementById("myCanvas");
let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
btn2.style.background = "yellow";
let btn3 = document.getElementById("button3");
c.width = c.clientWidth;
c.height = c.clientHeight;
const ctx = c.getContext("2d");

img.onload = () => {
    setInterval(changePosition, 15);
};

btn1.addEventListener("click", (event) => {
    speed = 2;
    console.log("maura");
    btn1.style.background = "yellow";
    btn2.style.background = "#ffffb3";
    btn3.style.background = "#ffffb3";
    pointSpeed = 6
})
btn2.addEventListener("click", (event) => {
    speed = 5;
    btn1.style.background = "#ffffb3";
    btn2.style.background = "yellow";
    btn3.style.background = "#ffffb3";
    pointSpeed = 3

})
btn3.addEventListener("click", (event) => {
    speed = 8;
    btn1.style.background = "#ffffb3";
    btn2.style.background = "#ffffb3";
    btn3.style.background = "yellow";
    pointSpeed = 2
})


function changePosition() {
    ctx.clearRect(0, 0, c.width, c.height);

    x += speed;
    y += upnDown;

    ctx.save();

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.clip();

    ctx.drawImage(img, x - radius, y - radius, radius * 2, radius * 2);

    yMax = window.innerHeight - radius


    ctx.restore();
    change += 1;
    changeS += 1;




    if(x >= c.width + 100){
        x = -100
        y = getRandom(250, 800)
        radius = 80
    }

    if(change === 10){
        if(y > yMax){
            upnDown = -7;
        } else if(y < 80){
            upnDown = 7;
        }else {
            direction = Math.floor(Math.random() * 2)

            if(direction === 0) {
                upnDown = 7;
            } else if (direction === 1) {
                upnDown = -7;
            }
        }
        change = 0;
    }

    if(radius < 70 || radius > 160){
        radius = radius
    }  else {
        if(bet === 0){
            radius = radius + 1;
        } else{
            radius = radius - 1;
        }
    }


     if(changeS === 15){

         bet = Math.floor(Math.random() * 2);

        changeS = 0;
    }

    pointCounter++;

    if (isMouseOverCircle() && pointCounter >= pointSpeed) {
        pointScore++;
        points.innerText = pointScore;
        pointCounter = 0;
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
    return Math.sqrt(dx * dx + dy * dy) <= radius;
}

let pointScore = 0;
const points = document.getElementById("points");

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}