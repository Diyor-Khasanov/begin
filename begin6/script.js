let a = parseFloat(prompt("Paralellopipedning a tomonini kiriting"));
let b = parseFloat(prompt("Paralellopipedning b tomonini kiriting"));
let c = parseFloat(prompt("Paralellopipedning c tomonini kiriting"));

let v = a * b * c;
let s = 2 * (a * b + b * c + a * c);

console.log(v, s);
