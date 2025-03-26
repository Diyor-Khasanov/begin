let a = parseFloat(prompt("a burchakni graduslarda kiriting"));
let p = 3.14;

if (0 < a < 360) {
  let rad = (180 / p) * a;
  console.log(rad);
} else {
  alert("Xatolik yuzaga chiqdi");
}
