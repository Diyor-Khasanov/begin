let a = parseFloat(prompt("1-x koordinatasini kiriting"));
let b = parseFloat(prompt("1-y koordinatasini kiriting"));
let x = parseFloat(prompt("2-x koordinatasini kiriting"));
let y = parseFloat(prompt("2-y koordinatasini kiriting"));

console.log(a, ",", b);
console.log(x, ",", y);

if (a === b || a === x || a === y || b === x || b === y || x === y) {
  alert("Xatolik yuzaga chiqdi");
} else if (a >= x || b >= y) {
  alert("Xatolik yuzaga chiqdi");
} else {
  let t = x - a;
  let r = y - b;
  let p = 2 * (t + r);
  let s = t * r;
  console.log(p, s);
}
