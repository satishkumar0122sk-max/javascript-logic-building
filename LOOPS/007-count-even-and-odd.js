// Q007 — Count even and odd numbers from 1 to 50

let even = 0;
let odd = 0;

for( let i = 1; i <=50; i++){
  if(i % 2 === 0){
    even++;
  } else {
    odd++;
  }
}
console.log("even = ",even);
console.log("odd = ",odd);
