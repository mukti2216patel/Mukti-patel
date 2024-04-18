console.log("Loop")
for(let a=0;a<5;a++)
{
    console.log(a);
}
let obj={
    name:"mukti",
    role:"Programmer"
}
for(const key in obj)
{
    const element = obj[key];
    console.log(key,element);
}
