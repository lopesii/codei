let radio = document.querySelector('.manual-btn')
let cont = 1;


document.getElementById('radio1').checked = true

setInterval(()=> {
    proximaImg()
}, 4000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}


const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
  
      const target = link.getAttribute('href');
  
      if (target) {
        const targetSection = document.querySelector(target);
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });