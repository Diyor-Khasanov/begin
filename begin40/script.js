let a1 = parseFloat(prompt("a1 sonini kiriting"));
let b1 = parseFloat(prompt("b1 sonini kiriting"));
let c1 = parseFloat(prompt("c1 sonini kiriting"));
let a2 = parseFloat(prompt("a2 sonini kiriting"));
let b2 = parseFloat(prompt("b2 sonini kiriting"));
let c2 = parseFloat(prompt("c2 sonini kiriting"));

let d = a1 * b1 - a2 * b2;
let y = a1 * c2 - (a2 * c1) / d;
let x = c1 * b2 - (c2 * b1) / d;

console.log(d, y, x);
