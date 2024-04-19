const text = ["Education Workshop", "Health And Nutrition Camp", "Women Empowerment", "Child Welfare Protection"];
let i = 0;
const text1 = ["$2345", "$7812", "$8900", "$1223"]


document.addEventListener("DOMContentLoaded", function() {
  let a = document.querySelector('.boxContainer');

  async function createbox(className) {
    const divElement = document.createElement('div');
    divElement.className = className;
    return divElement;
  }
  for (let count = 0; count < 4; count++) {
    (async function() {
      const c = await createbox('box');
      const d = await createbox('cardImage');
      const e = await createbox('programTitle');
      const f = await createbox('donationCount');
      const btn = document.createElement('button');
      btn.textContent = 'Donate Now';

      c.appendChild(d);
      c.appendChild(e);
      c.appendChild(f);
      c.appendChild(btn);
      a.appendChild(c);

      addinfo(c, text[count], "Donation Goal : ", text1[count]);
    })();

  }
  async function addinfo(a, b, c, d) {
    a.querySelector('.programTitle').textContent = b;
    a.querySelector('.donationCount').innerHTML = `${c} <span>${d}</span>`; 
  }
});



const colors = ["#d69a50", "#00c6b3", "#8024d4", "#ec568a"];
const numbers = ["01", "02", "03", "04"];
const events = ["Child Right Awarness", "Education Field Trip", "Creative Art Event", "Sport And Recreation Camp"];
const locations = ["NADIAD", "SURAT", "AHEMDABAD", "VAPI", "KOLKATA"];

document.addEventListener("DOMContentLoaded", function() {
  const a = document.getElementById('evnt');
  async function createle(className) {
    let div = document.createElement('div');
    div.className = className;
    return div;
  }

  async function createImg(src) {
    let img = document.createElement('img');
    img.src = src;
    return img;
  }

  async function createspan() {
    let a = document.createElement('span');
    a.style.fontFamily = 'oswald';
    return a;
  }

  (async function() {
    for (let i = 0; i < 4; i++) {
      let b = await createle('cardS');
      let Src = 'cards' + (i + 1) + '.jpg';
      let img = await createImg(Src);
      b.appendChild(img);
      let c = await createle('s1');
      c.style.backgroundColor = colors[i];
      c.style.padding = '10px 12px';
      let d = await createspan();
      d.textContent = numbers[i];
      let f = await createspan();
      f.textContent = 'Feb';
      c.appendChild(d);
      c.appendChild(f);
      b.appendChild(c);
      let g = await createle('card1');
      g.innerHTML = `<h5>${events[i]}</h5>`;
      let h = await createle('flex');
      let x = await createspan();
      x.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="${colors[i]}">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M3 9H21M7 3V5M17 3V5M7 13H17V17H7V13ZM6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#00000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </g>
    </svg>`;
      let y = await createspan();
      y.innerHTML = `${i + 1}:00 AM TO ${i + 2}:00AM. ${locations[i]} `;
      y.style.fontSize = '12px';
      y.style.color = colors[i];
      y.style.fontWeight = 'bold';
      h.appendChild(x);
      h.appendChild(y);
      g.appendChild(h);
      b.appendChild(g);
      let z = await createle('border');
      z.style.backgroundColor = colors[i];
      b.appendChild(z);
      a.appendChild(b);
    }
  })();
});


document.addEventListener("DOMContentLoaded", function() {
    const donateButton = document.getElementById("donatebtn");
  
    const programs = document.getElementsByClassName('container')[0];
  
  
    donateButton.addEventListener("click", function() {
      programs.scrollIntoView({ behavior: 'smooth' });
    });
  
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const about = document.getElementById("about Us");
    const footer = document.getElementsByClassName('f1')[0];
  
    about.addEventListener("click", function() {
      footer.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const donateButton = document.getElementById("programbtn");
  
    const programs = document.getElementsByClassName('container')[0];
  
  
    donateButton.addEventListener("click", function() {
      programs.scrollIntoView({ behavior: 'smooth' });
    });
  
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const donateButton = document.getElementById("eventbtn");
  
    const programs = document.getElementsByClassName('news')[0];
  
  
    donateButton.addEventListener("click", function() {
      programs.scrollIntoView({ behavior: 'smooth' });
    });
  
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const donateButton = document.getElementById("vnbtn");
  
    const programs = document.getElementsByClassName('volunteer')[0];
  
    donateButton.addEventListener("click", function() {
      programs.scrollIntoView({ behavior: 'smooth' });
    });
  
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const donateButton = document.getElementById('forscroll');
  
    const programs = document.getElementsByClassName('about')[0];
  
    donateButton.addEventListener("click", function() {
      programs.scrollIntoView({ behavior: 'smooth' });
    });
  
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const donateButton = document.getElementById('forscroll1');
  
    const programs = document.getElementsByClassName('about1')[0];
  
    donateButton.addEventListener("click", function() {
      programs.scrollIntoView({ behavior: 'smooth' });
    });
  
  });
  
  
  
  
  
  