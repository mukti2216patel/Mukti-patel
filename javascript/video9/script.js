console.log("Arrays")
let arr=[1,2,3,4,5,6]
console.log(arr,typeof(arr))
//Accessing elements of array
console.log(arr[0])
arr[0]=566;
console.log(arr[0])
console.log(arr.length)

console.log(arr.toString())
console.log(arr.join(" and "));
//remove first ele
console.log(arr.pop());
//add ele at last
console.log(arr.push(100));

arr.push("Mukti");

console.log(arr);
//remove first ele and shift all rest ele to right to left
console.log(arr.shift());
console.log(arr);
//add ele at first index
console.log(arr.unshift("Patel"));
console.log(arr);
//delete ele
delete arr[2];
console.log(arr);


let b1=[1,2,3]
let b2=[4,5,6]
let b3=[9,8,7]
// b1.concate does not change original array
console.log(b1.concat(b2,b3));
console.log(b1);
//b2.sort() sort the array 
b2=[5,4,6];
console.log(b2);
console.log(b2.sort());
console.log(b2);
//splice can used to add new items to an array
// splice(index,how many item will be delete ,item1,item2...)
// if we do not provide any argument after index then it will remove that much element from array
// if we do not provide any item then it will just remove that much element from array
let num=[1,2,3,4,5]
num.splice(1,2);
console.log(num);
// it remove all after 1 index
num.splice(1);
console.log(num);




