// Q013 — Reverse a number

let num = 12345;//+prompt("Enter a number");
let re = 0;

while (num > 0){
  let digit = num % 10;
  re = re * 10 + digit; 
  num = Math.floor(num /10);
}
console.log(re);
