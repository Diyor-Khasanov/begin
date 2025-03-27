let v1 = parseFloat(prompt("1-avtomobilning tezligini kiriting"));
let v2 = parseFloat(prompt("2-avtomobilning tezligini kiriting"));
let s = parseFloat(prompt("Ular o'rtasidagi masofani kiriting"));
let t = parseFloat(prompt("Ular bir-birigayaqinlashadigan vaqtni kiriting"));

let syangi = s - (t * v1 + t * v2);
console.log(syangi);