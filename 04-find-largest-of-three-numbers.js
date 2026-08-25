// ===== Question 4: Write a JavaScript program to find the largest number among three given numbers. If all three numbers are equal, display "All three numbers are same". =====
let num1 = +prompt("write your 1st number");
let num2 = +prompt("write your 2nd number");
let num3 = +prompt("write your 3rd number");

if (num1 === num2 && num2 === num3) {
  console.log(num1, num2, num3, "All three numbers are same");
} else if (num1 >= num2 && num1 >= num3) {
  console.log(num1, "is greater");
} else if (num2 >= num1 && num2 >= num3) {
  console.log(num2, "is greater");
} else {
  console.log(num3, "is greater");
}
