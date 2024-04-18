console.log("Marks of student print ")
let obj={
    "abc":100,
    "bcd":23,
    "cde":24,
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
}