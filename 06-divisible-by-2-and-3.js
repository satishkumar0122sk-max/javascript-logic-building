// Question:
// Check whether a number is divisible by 2, 3, both, or neither.

let num = +prompt("Write your number");

if (num % 2 === 0 && num % 3 === 0) {
  console.log("both yes");
} else if (num % 2 === 0) {
  console.log("yes");
} else if (num % 3 === 0) {
  console.log("yes");
} else {
  console.log("no");
}
