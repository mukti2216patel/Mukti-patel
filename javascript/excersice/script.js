let a=prompt("enter number");
let fact=[];
for (let index = 1; index <= a; index++) {
    fact[index]=index    
}
console.log(fact)
const red = (a, b) => {
  return a * b;
}

console.log(fact.reduce(red));