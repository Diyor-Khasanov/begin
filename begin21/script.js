let x1 = parseFloat(prompt("x1 kiriting"));
let y1 = parseFloat(prompt("y1 kiriting"));
let x2 = parseFloat(prompt("x2 kiriting"));
let y2 = parseFloat(prompt("y2 kiriting"));
let x3 = parseFloat(prompt("x3 kiriting"));
let y3 = parseFloat(prompt("y3 kiriting"));

let a = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
let b = ((x3 - x1) ** 2 + (y3 - y1) ** 2) ** 0.5;
let c = ((x2 - x3) ** 2 + (y2 - y3) ** 2) ** 0.5;

let p = (a + b + c) / 2;
let s = (p * (p - a) * (p - b) * (p - c)) ** 0.5;
console.log(p, s);
