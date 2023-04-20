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
//for question number 4 Alia it can't work it will display nothing ou know why? it because in our condition you set like i>n.length where if it is greater than there is 
//no value bcz it will exceed our array
// even you use the same approach but set your condition like this i<n.length it will display the initial array n.length times
//try it in vscode and see

//so you should do like this

let n = [3, 5, 6, 7, 10, 11, 19, 20, 30];
let newN = [];
for (let i = 0; i < n.length; i++) {
  if (n[i] > 10) {
    newN.push(n[i]);
  }
}
console.log(newN);

//otherwise you did great 
