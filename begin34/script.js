let x = parseFloat(prompt("Shokolad massasini kiriting"));
let a = parseFloat(prompt("Shokolad narxini kiriting"));
let y = parseFloat(prompt("Konfet massasini kiriting"));
let b = parseFloat(prompt("Konfet narxini kiriting"));

let birShokolad = a / x;
let birKonfet = b / y;

if (birShokolad > birKonfet) {
  console.log(birShokolad - birKonfet);
} else if (birShokolad == birKonfet) {
  console.log("Ikkalasining narxi bir xil");
} else {
  console.log(birKonfet - birShokolad);
}
