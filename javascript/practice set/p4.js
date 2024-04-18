let num=[1,2,3,4,5,6]
console.log(num.toString());
console.log(num.join(" and "));  //"1 and 2 and 3 and 4 and 5 and 6"
//The toString() method is used to convert an object or a variable into a string. If the separator is provided as a parameter then it will  
// pop and push change the original array
console.log(num.pop());
console.log(num);
console.log(num.push(9));
console.log(num);
// shift and unshift and delete also change the original array
console.log(num.shift());
console.log(num);
console.log(num.unshift(1));
console.log(num);
delete num[0];
console.log(num);
// sort change the original array
let a=[7,-8,9];
console.log(a.sort());
console.log(a);

let b=[1,2,3,4,5,6];
//slice does not affect original array
console.log(b.slice(2,5));
console.log(b);
//splice  change the original array better than push and pop
console.log(b.splice(1,4,3,4,5,6));
console.log(b);
//reverse also change the original array
console.log(b.reverse());
console.log(b);
console.log(b.reverse());
console.log(b);

// it makes a new array without modifying original one
const c=[2,4,6,8,10,12];
let d=c.map((val,index,c)=>{
    return val/2;
})
console.log(d);
add = ((a,b)=>{
    return a+b;
})
console.log(c.reduce(add));

let aa=prompt("Enter the number of terms");
let ba=[0];
for(let ca=0;ca<=aa;ca++)
{
    if(ca!=0)
    {
        ba[ca]=ba[ca-1]+1;
    }
}

function factorial (a){
    if(a<=1)
    {
        return 1;
    }
    else
    {
        return a*factorial(a-1);
    }
}
console.log(factorial(ba[aa]));
