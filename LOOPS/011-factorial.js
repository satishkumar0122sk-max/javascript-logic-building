// Q011 — Find the factorial of a number

let j = +prompt("write your number")
let result = 1;

for(let i = 1; i <= j ; i++){
  result = result * i;
}
console.log("Factorial =", result);
