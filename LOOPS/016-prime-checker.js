// Q016 — Check whether a number is prime

let num = 10;
let prime = true;

for( let i = 2; i < num; i++){
if( num % i !== 0){
    prime = true;
  } else {
  prime = false
  }
}
console.log(prime)
if(prime){
  console.log("true");
} else {
  console.log("false");
}
