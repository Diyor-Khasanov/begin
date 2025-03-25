let r1 = parseFloat(prompt('1-aylana radiusini kiriting'))
let r2 = parseFloat(prompt("2-aylana radiusini kiriting (1-sidan kichik bo'lishi shart)"))
p = 3.14

if (r2 > r1){
    alert('Xatolik yuzaga chiqdi!')
} else{
    let s1 = r1 * p
    let s2 = r2 * p
    let s3 = p * (r1 - r2)

    console.log(s1, s2, s3);
    
}