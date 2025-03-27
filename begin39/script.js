let a = parseFloat(prompt("a sonini kiriting"));
let b = parseFloat(prompt("b sonini kiriting"));
let c = parseFloat(prompt("c sonini kiriting"));

let d = b ** 2 - 4 * a * c;
let x1 = ((-b + d ** 0.5) / 2) * a;
let x2 = ((-b - d ** 0.5) / 2) * a;
if (a > 0 && d > 0) {
  console.log(d, x1, x2);
} else {
  alert("Xatolik yuzaga chiqdi");
}
