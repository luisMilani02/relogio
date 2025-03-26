// Funções que mudam o tema
function mudarTempoBackB() {
    for (let i = 0; i < tempo.length; i++) {
        tempo[i].style.backgroundColor = tempoBackColorB
    }
    console.log('Mudar TempoW')
}

function mudarTempoBackW() {
    for (let i = 0; i < tempo.length; i++) {
        tempo[i].style.backgroundColor = tempoBackColorW
    }
    console.log('Mudar TempoB')
}


function textoCorB() {
    for (let i = 0; i < textos.length; i++) {
        textos[i].style.color = textosColorB
    }
    console.log('Mudar TextoW')
}

function textoCorW() {
    for (let i = 0; i < textos.length; i++) {
        textos[i].style.color = textosColorW
    }
    console.log('Mudar TextoB')
}


function contentCorB() {
    content.style.color = contentColorB
    console.log('Mudar ContentW')
}

function contentCorW() {
    content.style.color = contentColorW
    console.log('Mudar ContentB')
}


function bodyBackCorB() {
    fundo.style.backgroundColor = bodyBackB
    console.log('Mudar FundoW')
}

function bodyBackCorW() {
    fundo.style.backgroundColor = bodyBackW
    console.log('Mudar FundoB')
}

function h1CorB() {
    for (let i = 0; i < h1.length; i++) {
        h1[i].style.color = h1B
    }
    console.log('Mudar cor h1')
}

function h1CorW() {
    for (let i = 0; i < h1.length; i++) {
        h1[i].style.color = h1W
    }
    console.log('Mudar cor h1')
}