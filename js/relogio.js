function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    const dia = agora.getDay().toString();
    const mes = agora.getMonth().toString();
    const ano = agora.getFullYear().toString();

    const relogio = `${horas}:${minutos}:${segundos}`;
    const data = `${dia}/${mes}/${ano}`

    document.getElementById('div-relogio').textContent = relogio;
    document.getElementById('relogio-header').textContent = relogio;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();

function mostra() {
    document.getElementById('header').style.display = "block"
    document.getElementById('header').style.display = "flex"
    document.getElementById('bloco').style.display = "block"
    document.getElementById('div-relogio').style.display = "none"
}

function despertador() {
    document.getElementById('bloco').style.display = "none"
    document.getElementById('div-despertador').style.display = "block"
}

function temporizador() {
    document.getElementById('bloco').style.display = "none"
    document.getElementById('div-temporizador').style.display = "block"
}

function cronometro() {
    document.getElementById('bloco').style.display = "none"
    document.getElementById('div-cronometro').style.display = "block"
}

// -------------------------------------------------

function modo() {
    const fundo = document.getElementById('body')
    if(fundo.style.backgroundColor == "rgb(255, 255, 255)") {
        fundo.style.backgroundColor = "rgb(14, 16, 27)"
    } else {
        fundo.style.backgroundColor = "rgb(255, 255, 255)"
    }
}

function volta() {
    // Dar um jeito de pegar a div atual que foi clicada    
    document.getElementById('div-despertador').style.display = "none"
    document.getElementById('div-temporizador').style.display = "none"
    document.getElementById('div-cronometro').style.display = "none"
    document.getElementById('bloco').style.display = "block"
}

function mostraAlarmes () {
    var div_alarmes = document.getElementById('div-alarmes')
    if(div_alarmes.style.display == "block") {
        div_alarmes.style.display = "none"
    } else {
        div_alarmes.style.display = "block"
    }
}