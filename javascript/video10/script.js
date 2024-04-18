// console.log("Mukti")

// let a=document.getElementsByClassName("box")
// console.log(a)
// a[2].style.backgroundColor = "red"

// document.getElementById("red").style.backgroundColor = "green"
console.log(document.querySelectorAll(".box")) ;
// use for loop to change all box bgcolor

// document.querySelectorAll(".box").forEach(e => {
//     e.style.backgroundColor = "violet";
// });


document.querySelectorAll(".box").forEach((e1) =>{
    e1.style.backgroundColor = "pink";
});

console.log(document.getElementsByTagName("div"));


let e = document.getElementsByTagName("div");
console.log(e[4].matches("#red"));