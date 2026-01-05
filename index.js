

let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

let pos = 2.25

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(window.innerWidth / pos, window.innerHeight / 2, 80, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

setTimeout(changePosition, 300)

function changePosition() {
    ctx.clearRect(0, 0, c.width, c.height);
    pos = pos + 0.2;
    ctx.arc(window.innerWidth / pos, window.innerHeight / 2, 80, 0, 2 * Math.PI);
    ctx.fill();
    console.log("change position");
}