console.log("This is promise");

let prom1 = new  Promise((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5)
    {
        reject("not supporting ");
    }
    else
    {
        setTimeout(() => {
            console.log("Yes i am done");
            resolve("Mukti");
        },1000);
    }
})
prom1.then((a) => {
  console.log(a);
}).catch((e) =>{
   console.log(e);
});