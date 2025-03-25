let a = parseFloat(prompt("1-sonni kiriting!"));
let b = parseFloat(prompt("2-sonni kiriting!"));
let c = parseFloat(prompt("3-sonni kiriting!"));

if (a < b && b < c) {
  let x = c - a;
  let y = c - b;
  console.log(x, y, x + y);
} else {
  alert("Xatolik yuzaga chiqdi!");
}
