let a=[1,3,5,6,88]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}


a.forEach((value,index,arr) =>{
    console.log(value,index,arr);
})

let obj={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
            console.log(key ,element);
    }
}


for (const ele of a   ) {
    console.log(ele);
}

//use original arr and make one array using least sentences
