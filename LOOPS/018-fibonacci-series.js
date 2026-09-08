// Q018 — Print Fibonacci series

let a = 0;
let b = 1;
let total;

for( let i = 0; i<=10;i++){
  total = a + b;
  a = b;
  b = total;
  console.log(total)
}
