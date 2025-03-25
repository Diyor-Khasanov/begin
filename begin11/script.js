let a = parseFloat(prompt("1-sonni kiriting (0 ga teng bo'lishi mumkin emas)"))
let b = parseFloat(prompt("2-sonni kiriting (0 ga teng bo'lishi mumkin emas)"))

if (a === 0 || b === 0) {
    alert("Xatolik yuzaga keldi!")
} else {
    console.log(a + b, a * b, "modul");
}