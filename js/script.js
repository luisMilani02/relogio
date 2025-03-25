const hora = document.getElementById('hr');
const minuto = document.getElementById('min');
const segundo = document.getElementById('s');
const mudar = document.getElementById('mudar')

let tempo = document.getElementsByClassName('tempo')
let textos = document.getElementsByClassName('textos')
let content = document.getElementById('content')
let fundo = document.body

let tema = 'white'

// BLACK
let tempoBackColorB = 'rgb(30, 30, 30)'
let textosColorB = 'rgb(187, 187, 187)'
let contentColorB = 'rgb(41, 41, 41)'
let bodyBackB = 'rgb(20, 20, 20)'

// WHITE
let tempoBackColorW = 'rgba(30, 30, 30, 0.250)'
let textosColorW = 'rgb(61, 61, 61)'
let contentColorW = 'rgb(138, 138, 138)'
let bodyBackW = 'rgb(222, 222, 222)'

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
    if (tema == 'white') {
        tema = 'black'
        console.log(tema)
        mudarTempoBackB()
        textoCorB()
        contentCorB()
        bodyBackCorB()
    } else  if (tema == 'black') {
        tema = 'white'
        console.log(tema)
        mudarTempoBackW()
        textoCorW()
        contentCorW()
        bodyBackCorW()
    }
}

function mudarTempoBackB() {
    for (let i = 0; i < tempo.length; i++) {
        tempo[i].style.backgroundColor = tempoBackColorB
    }
    console.log('Mudar TempoB')
}

function mudarTempoBackW() {
    for (let i = 0; i < tempo.length; i++) {
        tempo[i].style.backgroundColor = tempoBackColorW
    }
    console.log('Mudar TempoW')
}


function textoCorB() {
    for (let i = 0; i < textos.length; i++) {
        textos[i].style.color = textosColorB
    }
    console.log('Mudar TextoB')
}

function textoCorW() {
    for (let i = 0; i < textos.length; i++) {
        textos[i].style.color = textosColorW
    }
    console.log('Mudar TextoW')
}


function contentCorB() {
    content.style.color = contentColorB
    console.log('Mudar ContentB')
}

function contentCorW() {
    content.style.color = contentColorW
    console.log('Mudar ContentW')
}


function bodyBackCorB() {
    fundo.style.backgroundColor = bodyBackB
    console.log('Mudar FundoB')
}

function bodyBackCorW() {
    fundo.style.backgroundColor = bodyBackW
    console.log('Mudar FundoW')
}