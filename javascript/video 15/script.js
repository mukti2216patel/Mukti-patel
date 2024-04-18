let a = prompt("Enter first num");
let b= prompt("Enter second number");
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("None");
}
let sum = parseInt(a) + parseInt(b);

try {
    let x =1;
    console.log("The sum is ",sum*x)
} catch (error) {
    console.log("Error")
    return false;
}
    console.log("Files are being closed and db connection is being closed")

