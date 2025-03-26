let a = parseFloat(prompt("a burchakni radianda kiriting"));
let p = 3.14;

if (0 < a < 2 * p) {
  let gradus = (p / 180) * a;
  console.log(gradus);
} else {
  alert("Xatolik yuzaga chiqdi");
}
