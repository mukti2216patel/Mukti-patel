console.log("I am hacker");
console.log("I am mukti");
setTimeout(() => {
  console.log("end");
}, 1000);
console.log("nothing");
const callback = (arg) => {
  console.log(arg);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Mukti");
  document.head.append(sc);
};
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)