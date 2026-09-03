// Q015 — Find the largest digit

let num = 123456;
let large = 0; 

while(num > 0){
  let digit = num % 10;
  num = Math.floor(num / 10);
  if(digit > large){
    large = digit;
  }
}
console.log(large);
