const hora = document.getElementById('hr');
const minuto = document.getElementById('min');
const segundo = document.getElementById('s');
const mudar = document.getElementById('mudar')

var tempo = document.getElementsByClassName('tempo')
var textos = document.getElementsByClassName('textos')
var content = document.getElementById('content')
var body = document.getElementById('body')

let tema = 'black'

mudar.addEventListener('click', mudarModo)

const relogio = setInterval(function horaCerta() {
    let hj = new Date();
    let h = hj.getHours();
    let m = hj.getUTCMinutes();
    let s = hj.getUTCSeconds();
    
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    
    hora.textContent = h 
    minuto.textContent = m
    segundo.textContent = s 
    console.log(h+':'+m+':'+s)
})

function mudarModo() {
    if (tema == 'white') {
        
        tema = 'white'
        for (let i = 0; i < tempo.length; i++) {
            tempo[i].style.backgroundColor = 'rgb(30, 30, 30)'
        }
    } else {
        tema = 'black'
    }
}