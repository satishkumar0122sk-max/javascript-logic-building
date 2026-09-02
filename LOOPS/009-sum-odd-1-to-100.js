// Q009 — Find the sum of odd numbers from 1 to 100

let total = 0;
for(let i = 1; i <= 100; i++){
  if(i % 2 === 1){
    total = total + i;
  }
}
console.log(total);
