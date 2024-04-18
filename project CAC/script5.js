
const random = function(){
   const hex = "0123456789ABCDEF"
   let color = '#'
   for(let i=0;i<6;i++)
   {
       color += hex[Math.floor(Math.random()*16)]
   }
   return color;
}
let inter;
const startchangingcolor = function() {
   inter = setInterval(() => {
    document.body.style.backgroundColor = random();
   }, 1000);
} 
const stopchangingcolor = function(){
    clearInterval(inter);
    // inter = null;
};
document.querySelector('#start').addEventListener('click',startchangingcolor)
document.querySelector('#stop').addEventListener('click',stopchangingcolor)


