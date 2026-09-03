// Q012 — Count the number of digits

let num = +prompt("Enter a number");
let count = 0;

while (num > 0) {
  num = Math.floor(num / 10);
  count++;
}
console.log("Number of digits =", count);
