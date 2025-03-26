const hora = document.getElementById('hr');
const minuto = document.getElementById('min');
const segundo = document.getElementById('s');
const mudar = document.getElementById('mudar')

const tempo = document.getElementsByClassName('tempo')
const textos = document.getElementsByClassName('textos')
const content = document.getElementById('content')
const h1 = document.getElementsByClassName('h1')
const fundo = document.body

let tema = 'dark'


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
    //console.log(h+':'+m+':'+s)
})

function mudarModo() {
    console.log('comecou: ' + tema)
    if (tema == 'light') {
        tema = 'dark'
        console.log(tema)
        document.title = 'Relógio - ' + tema + ' theme'
        mudarTempoBackB()
        textoCorB()
        contentCorB()
        bodyBackCorB()
        h1CorB()
    } else if (tema == 'dark') {
        tema = 'light'
        console.log(tema)
        document.title = 'Relógio - ' + tema + ' theme'
        mudarTempoBackW()
        textoCorW()
        contentCorW()
        bodyBackCorW()
        h1CorW()
    }
}
