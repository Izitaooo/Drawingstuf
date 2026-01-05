

let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(window.innerWidth / 2.25, window.innerHeight / 2, 80, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

