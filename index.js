//1
let string = "now we are learning javascript"
let reString = string.split("").reverse().join("")
console.log(reString)

//2
let S ="I.like.this.program.very.much"
let reS = S.split(".").reverse().join(".")
console.log(reS)

//3
function isPalindrome(input){
return input === input.split("").reverse().join("")
}
console.log(isPalindrome("radar"))
console.log(isPalindrome("alia"))

//4
let n = [3,5,6,7,10,11,19,20,30]
for (let i= 0; i > n.length; i++){
 if (n[i] > 10){
    console.log(n)
 }
}