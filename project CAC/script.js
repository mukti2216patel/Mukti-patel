
const temp = document.querySelectorAll('.button');
console.log(temp);
temp.forEach(element => {
    console.log(element);
       element.addEventListener('click',(e)=>{
                let color = e.target.id;
                // console.log(color);
                document.body.style.backgroundColor = color;
       })
});


