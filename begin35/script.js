let v = parseFloat(prompt("Qayiqning tezligini kiriting"));
let u = parseFloat(prompt("Daryoning tezligini kiriting"));
let t1 = parseFloat(prompt("Oqim bo'yicha harakatlanadigan vaqtini kiriting"));
let t2 = parseFloat(prompt("Oqimga qarshi harakatlanadigan vaqtini kiriting"));
let tum = (t1 + t2) / 2;
let vum = v - u;

if (u >= v) {
  console.log("Xatolik yuzaga keldi");
} else {
  let s = vum * tum;
  console.log(s);
}
