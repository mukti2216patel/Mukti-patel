const form = document.querySelector('form')

form.addEventListener("submit", function(e) {
    e.preventDefault() // prevent the page from reloading on;
   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector("#weight").value); 
   const result = document.querySelector('.result');
   if(height === ''  || height<0 || isNaN(height)){
        result.innerHTML = "plz give a valid height"
   }
   else if(weight === ''  || weight<0 || isNaN(weight)){
    result.innerHTML = "plz give a valid weight"
    }
    else
    {
       const bmi =  (weight/(height*height/10000)).toFixed(2);
        result.innerHTML = `<br></br><div class="res"><span>${bmi}</span></div>`
        const abc = document.querySelector('.res');
        abc.style.color = 'green';
        abc.style.backgroundColor = 'pink';
        console.log(abc);
    }
    
});