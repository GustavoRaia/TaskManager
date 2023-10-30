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

    document.getElementById('div-relogio').textContent = relogio; // Atribui o valor de relógio (hora atual) para o a div de tela inicial.
    document.getElementById('relogio-header').textContent = relogio; // Atribui o valor de relógio (hora atual) para o a div presente na header.
    document.title = "Task Manager - " + relogio; // Define o relógio para atualizar o valor na barra de tarefas.
}

setInterval(atualizarRelogio, 1000); // Atualiza o relógio a cada segundo
atualizarRelogio();


var div_header = document.getElementById('header'); // Pega o valor do id 'header'
var div_bloco = document.getElementById('bloco-principal'); // Pega o valor do id do bloco principal 

var elem_relogio = document.getElementById('div-relogio'); // Pega o valor do id da div do relógio de inicio do programa.
var elem_temporizador = document.getElementById('temporizador-minimo'); // Pega o valor do id da div do relógio.
var elem_cronometro = document.getElementById('cronometro-minimo'); // Pega o valor do id da div do relógio.
var elem_puxa = document.getElementById('puxa'); // Pega o valor do id fda div de puxar a obsercação da lista de alarmes.

// Função que mostra as primeiras divs do site ao clicar no relógio inicial.
function mostra(elem_tempo) {

    switch (elem_tempo) {
        // Pronto
        case "div-relogio":

            div_header.style.display = "block";
            div_header.style.display = "flex";
            div_bloco.style.display = "block";
            elem_puxa.style.display = "block";

            elem_relogio.style.display = "none";

            break;

        // Pronto
        case "relogio-header":

            div_header.style.display = "none";
            div_bloco.style.display = "none";
            elem_puxa.style.display = "none";
            document.getElementById('div-despertador').style.display = "none";
            document.getElementById('div-temporizador').style.display = "none";
            document.getElementById('div-cronometro').style.display = "none";
            document.getElementById('div-alarmes').style.display = "none";
    
            elem_relogio.style.display = "block";
            break;

        // A fazer
        case "span-temporizador":
            window.alert("Case 3");
            break;


        // A fazer
        case "span-cronometro":

            var containter = document.getElementById('div-container')
            containter.innerHTML = elem_tempo

            div_header.style.display = "none";
            document.getElementById('div-despertador').style.display = "none";
            document.getElementById('div-temporizador').style.display = "none";
            document.getElementById('div-cronometro').style.display = "none";
            document.getElementById('div-alarmes').style.display = "none";

            document.getElementById('cronometro-minimo').style.display = "block";

            break;

    }
}


document.getElementById('span-cronometro').addEventListener('click', function() {
    mostra('span-cronometro');
});
document.getElementById('span-temporizador').addEventListener('click', function() {
    mostra('span-temporizador');
});
document.getElementById('relogio-header').addEventListener('click', function() {
    mostra('relogio-header');
});
document.getElementById('div-relogio').addEventListener('click', function() {
    mostra('div-relogio');
});

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

var alterna = 0;

// Função de Modo Claro/Escuro
function modo() {

    const classes = ['cor1', 'cor2', 'cor4'];
    const novasCores = ['#49515a05', '#49515a40', '#49515a20']; // Cores correspondentes às classes
    const coresVolta = ['#0e101b', '#1215284e', '#0e101b64']; // Cores correspondentes às classes


    if(alterna == 0) {
        for (let i = 0; i < classes.length; i++) {
            const elementos = document.querySelectorAll('.' + classes[i]);

            elementos.forEach(function (elemento) {
                elemento.style.backgroundColor = novasCores[i];
            });
        }
        // document.getElementById('modo-claro-escuro').style.backgroundImage = "./imagem/forma-de-meia-lua.png";
        document.querySelector('#modo-claro-escuro img').setAttribute('src', "./imagem/forma-de-meia-lua.png");
        alterna = 1;
    } else if (alterna == 1) {
        for (let i = 0; i < classes.length; i++) {
            const elementos2 = document.querySelectorAll('.' + classes[i]);

            elementos2.forEach(function (elemento) {
                elemento.style.backgroundColor = coresVolta[i];
            });
        }
        document.querySelector('#modo-claro-escuro img').setAttribute('src', "./imagem/brilho-do-sol.png");
        alterna = 0;

    }

}


function volta() {
    // Dar um jeito de pegar a div atual que foi clicada    
    document.getElementById('div-despertador').style.display = "none";
    document.getElementById('div-temporizador').style.display = "none";
    document.getElementById('div-cronometro').style.display = "none";
    div_bloco.style.display = "block";
}

function mostraAlarmes() {
    var div_alarmes = document.getElementById('div-alarmes')
    if (div_alarmes.style.display == "block") {
        div_alarmes.style.display = "none";
    } else {
        div_alarmes.style.display = "block";
    }
}

document.getElementById("puxa").addEventListener("click", function () {
    var divMovel = document.getElementById("div-alarmes");
    var divMovel2 = document.getElementById("puxa");

    divMovel.style.display = "block";
    divMovel.classList.toggle("move-esquerda"); // Adiciona ou remove a classe para mover a div
    
    divMovel2.classList.toggle("move-esquerda2");

});