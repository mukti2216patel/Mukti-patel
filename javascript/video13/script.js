

async function getData(){
  let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();  
    console.log(data);
    return data;
}
async function main(){
console.log("Loading module");
console.log("Do something");
console.log("Load data");
let data = await getData();
 console.log(data);
 console.log("process data");
 console.log("task2");
}
main();