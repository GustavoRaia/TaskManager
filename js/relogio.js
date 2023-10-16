// Função de formatar e atualizar relógio
function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    const relogio = `${horas}:${minutos}:${segundos}`;
    const dia = agora.getDay().toString();
    const mes = agora.getMonth().toString();
    const ano = agora.getFullYear().toString();
    const data = `${dia}/${mes}/${ano}`

    document.getElementById('div-relogio').textContent = relogio; // Atribui o valor de relógio (hora atual) para o a div de tela inicial
    document.getElementById('relogio-header').textContent = relogio; // Atribui o valor de relógio (hora atual) para o a div presente na header
}

setInterval(atualizarRelogio, 1000); // Atualiza o relógio a cada segundo
atualizarRelogio();


var div_header = document.getElementById('header'); // Pega o valor do id 'header'
var div_bloco = document.getElementById('bloco'); // Pega o valor do id 'bloco'

// Função que mostra as primeiras divs do site ao clicar no relógio inicial.
function mostra() {
    div_header.style.display = "block";
    div_header.style.display = "flex";
    div_bloco.style.display = "block";
    document.getElementById('div-relogio').style.display = "none";
}

// Muda os displays ao evento de clicar no botão de despertador
function despertador() {
    div_bloco.style.display = "none";
    document.getElementById('div-despertador').style.display = "block";
}

function temporizador() {
    div_bloco.style.display = "none";
    document.getElementById('div-temporizador').style.display = "block";
}

function cronometro() {
    div_bloco.style.display = "none";
    document.getElementById('div-cronometro').style.display = "block";
}






// CRIAR OUTRO ARQUIVO JS PARA AS FUNÇÕES ABAIXO
// -------------------------------------------------

// Função de Modo Claro/Escuro
function modo() {
    const fundo = document.getElementById('body');
    var teste234 = document.getElementsByClassName('cor2').document.getElementById(1);

    // var inex = 0;
    // var lista_kudus = []
    // for(inex in document.getElementsByClassName('cor2')) {
    //     lista_kudus.push(inex);
    // }
    // console.log(lista_kudus);

    if(teste234.style.backgroundColor == "rgba(18, 21, 40, 0.306)") { // Verifica se o fundo é branco
        fundo.style.backgroundColor = "rgb(14, 16, 27)"; 
        teste234.style.backgroundColor = "blue";
        div_bloco.style.color = "white";
    } else { // Se o fundo não for branco
        fundo.style.backgroundColor = "rgb(255, 255, 255)"; 
        div_bloco.style.color = "black";
        teste234.style.backgroundColor = "blue";
    }
}


function volta() {
    // Dar um jeito de pegar a div atual que foi clicada    
    document.getElementById('div-despertador').style.display = "none";
    document.getElementById('div-temporizador').style.display = "none";
    document.getElementById('div-cronometro').style.display = "none";
    div_bloco.style.display = "block";
}

function mostraAlarmes () {
    var div_alarmes = document.getElementById('div-alarmes')
    if(div_alarmes.style.display == "block") {
        div_alarmes.style.display = "none";
    } else {
        div_alarmes.style.display = "block";
    }
}