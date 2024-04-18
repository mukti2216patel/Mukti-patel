console.log("Bussiness")



let obj={
    adjective:"Crazy",
    adjective1:"Amazing",
    adjective2:"Fire",
}
let obj1={
    shopname:"Engine",
    shopname1:"Foods",
    shopname2:"Garments",
}
let obj2={
    word:"Bros",
    word1:"Limited",
    word2:"Hub",
}
console.log("Choose here adjectives:")
console.log("1.crazy")
console.log("2.amazing")
console.log("3.fire")
console.log("chose here shopname:")
console.log("1.engine")
console.log("2.Foods")
console.log("3.Garments")
console.log("Choose here word")
console.log("1.Bros")
console.log("2.Limited")
console.log("3.Hub")
let choice=prompt( "Enter the number of your choice");
let choice1=prompt( "Enter the number of your choice");
let choice2=prompt( "Enter the number of your choice");
let res;
if(choice == 1)
{
    res=obj.adjective;
}
else if(choice ==2)
{
    res=obj.adjective1;
}
else
{
    res=obj.adjective2;
}

if(choice1 == 1)
{
    res+=obj1.shopname;
}
else if(choice1 ==2)
{
    res+=obj1.shopname1;
}
else
{
    res+=obj1.shopname2;
}


if(choice2 == 1)
{
    res+=obj2.word;
}
else if(choice2 ==2)
{
    res+=obj2.word1;
}
else
{
    res+=obj2.word2;
}


console.log("The final output is : ",res);

