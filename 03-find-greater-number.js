// ===== Write a JavaScript program to find the greater of two given numbers. If both numbers are equal, display "Both numbers are same". =====

let num1 = +prompt("Enter your first number");
let num2 = +prompt("Enter your second number");

if (num1 === num2) {
  console.log("Both numbers are same");
} else if (num1 > num2) {
  console.log(num1 + " is greater than " + num2);
} else {
  console.log(num2 + " is greater than " + num1);
}
