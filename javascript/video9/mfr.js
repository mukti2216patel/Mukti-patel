let arr=[1,3,5,7,11];
let newarr=[]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr.push(element**2);
}
console.log(newarr);

let newarr1=arr.map((e)=>{
            return e**2;
})
console.log(newarr1);

//filter method is used to create a new array  with all elements that pass the test implemented by the provided function 
const greaterthanSeven =(e)=>{
    if(e>7)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(newarr.filter(greaterthanSeven));

console.log(arr.filter((e)=>{(e>7)?true:false}));

let arr2=[1,2,3,4,5,6]
const red =(a,b)=>{
    return a+b;
}
console.log(arr.reduce(red));



