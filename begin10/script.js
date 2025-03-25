let a = parseFloat(prompt("1-sonni kiriting (0ga teng emas)"))
let b = parseFloat(prompt("2-sonni kiriting (0ga teng emas)"))

if (a === 0 || b === 0) {
    alert("Xato son kiritdingiz")
} else {
    // yig'indi
    console.log(a + b, a * b, a ** 2, b ** 2);
}