// Dicionário de Variáveis ======================

var elem_relogio = document.getElementById('div-relogio'); // Pega o valor do id da div do relógio de inicio do programa.

var div_header = document.getElementById('header'); // Pega o valor do id 'header'
var div_bloco = document.getElementById('bloco-principal'); // Pega o valor do id do bloco principal 

var elem_container_temporizador = document.getElementById('container-temporizador');
var elem_container_cronometro = document.getElementById('container-cronometro');

var elem_div_despertador = document.getElementById('div-despertador');
var elem_div_temporizador = document.getElementById('div-temporizador');
var elem_div_cronometro = document.getElementById('div-cronometro');

var elem_span_temporizador = document.getElementById('span-temporizador');
var elem_span_smh = document.getElementById('span-smh');
var elem_span_milissegundos = document.getElementById('span-milissegundos');

var elem_botoes_cronometro = document.getElementById('botoes-func-container-cronometro');
var elem_botoes_temporizador = document.getElementById('botoes-func-container-temporizador');

var elem_puxa_alarmes = document.getElementById('puxa-div'); // Pega o valor do id da div de puxar a observação da lista de alarmes.
var elem_puxa_div_alarmes = document.getElementById('puxa-div-alarmes');
var elem_puxa_div_todo = document.getElementById('puxa-div-todo');
var elem_div_alarmes = document.getElementById('div-alarmes');

// Funções ======================================

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

    elem_relogio.textContent = relogio; // Atribui o valor de relógio (hora atual) para o a div de tela inicial.
    document.getElementById('relogio-header').textContent = relogio; // Atribui o valor de relógio (hora atual) para o a div presente na header.
    document.title = "Task Manager - " + relogio; // Define o relógio para atualizar o valor na barra de tarefas.
}
setInterval(atualizarRelogio, 1000); // Atualiza o relógio a cada segundo
atualizarRelogio();

var modo_temporizador = 0;
var modo_cronometro = 0;

// Função que mostra as primeiras divs do site ao clicar no relógio inicial.
function mostra(elem_tempo) {

    switch (elem_tempo) {
        case "div-relogio": // Se o relógio do inicio da aplicação for clicada

            div_header.style.display = "block";
            div_header.style.display = "flex";
            div_bloco.style.display = "block";
            
            elem_puxa_alarmes.style.display = "block";
            elem_puxa_div_alarmes.style.display = "block";
            elem_puxa_div_todo.style.display = "block";
            elem_div_alarmes.style.display = "block";

            elem_relogio.style.display = "none";
            break;

        case "relogio-header": // Se o relógio da header for clicado

            limpaTudo();
    
            elem_relogio.style.display = "block";
            break;

        case "span-temporizador": // Se o span de valor do temporizador for clicado
            
            if(modo_temporizador == 0) {

                limpaTudo();

                // Edição das Informações do Temporizador para Tela Minimalista.
                elem_container_temporizador.style.marginTop = "32.5vh";
                elem_container_temporizador.style.marginLeft = "-5vw";
                
                elem_botoes_temporizador.style.marginLeft = "5.5vw";

                elem_span_temporizador.style.fontSize = "66pt";
                elem_span_temporizador.style.marginLeft = "6vw";
                
                elem_container_temporizador.style.display = "block";

                document.getElementById('horas-temporizador').style.width = "5.3vw";
                document.getElementById('minutos-temporizador').style.width = "5.3vw";
                document.getElementById('segundos-temporizador').style.width = "5.3vw";
                document.getElementById('confirmar-valor').style.marginLeft = "7.5vw";
                
                modo_temporizador++;
            } else if (modo_temporizador == 1) {

                voltaPadrao('div-temporizador', 'container-temporizador');

                // Edição das Informações do Temporizador para voltar a tela normal.
                elem_container_temporizador.style.marginTop = "";
                elem_container_temporizador.style.marginLeft = "";
                elem_span_temporizador.style.marginLeft = "";
                elem_botoes_temporizador.style.marginLeft = "";
                elem_span_temporizador.style.fontSize = "";

                document.getElementById('horas-temporizador').style.width = "";
                document.getElementById('minutos-temporizador').style.width = "";
                document.getElementById('segundos-temporizador').style.width = "";
                document.getElementById('confirmar-valor').style.marginLeft = "";

                elem_puxa_alarmes.style.display = "block";
                elem_puxa_div_alarmes.style.display = "block";
                elem_puxa_div_todo.style.display = "block";
                elem_div_alarmes.style.display = "block";

                modo_temporizador--;
            }
            break;

        case "span-cronometro": // Se o span de valor do cronômetro for clicado

            if(modo_cronometro == 0) {

                limpaTudo();

                // Edição das Informações do Cronômetro para Tela Minimalista.
                elem_container_cronometro.style.marginTop = "32.5vh";
                elem_container_cronometro.style.marginLeft = "-5vw";
                
                elem_botoes_cronometro.style.marginLeft = "5.5vw";

                elem_span_smh.style.fontSize = "66pt";

                elem_span_milissegundos.style.fontSize = "20pt";

                elem_container_cronometro.style.display = "block";
                
                modo_cronometro++;
            } else if (modo_cronometro == 1) {

                voltaPadrao('div-cronometro', 'container-cronometro');

                // Edição das Informações do Cronômetro para voltar a tela normal.
                elem_container_cronometro.style.marginTop = "";
                elem_container_cronometro.style.marginLeft = "";
                elem_botoes_cronometro.style.marginLeft = "";
                elem_span_smh.style.fontSize = "";
                elem_span_milissegundos.style.fontSize = "";

                elem_puxa_alarmes.style.display = "block";
                elem_puxa_div_alarmes.style.display = "block";
                elem_puxa_div_todo.style.display = "block";
                elem_div_alarmes.style.display = "block";

                modo_cronometro--;
            }
            break;
    }
}

function limpaTudo() {
    div_header.style.display = "none";
    div_bloco.style.display = "none";
    elem_div_despertador.style.display = "none";
    elem_div_temporizador.style.display = "none";
    elem_div_cronometro.style.display = "none";

    elem_container_cronometro.style.display = "none";
    elem_container_temporizador.style.display = "none";

    elem_puxa_alarmes.style.display = "none";
    elem_puxa_div_alarmes.style.display = "none";
    elem_puxa_div_todo.style.display = "none";
    elem_div_alarmes.style.display = "none";
}

function voltaPadrao(elem1, elem2) {
    document.getElementById(elem1).style.display = "block";
    document.getElementById(elem2).style.display = "block";

    div_header.style.display = "block";
    div_header.style.display = "flex";
}

// Muda os displays ao evento de clicar no botão de despertador
function despertador() {
    div_bloco.style.display = "none";
    elem_div_temporizador.style.display = "none";
    elem_div_cronometro.style.display = "none";
    elem_container_temporizador.style.display = "none";
    elem_container_cronometro.style.display = "none";


    elem_div_despertador.style.display = "block";
}

function temporizador() {
    div_bloco.style.display = "none";
    elem_div_temporizador.style.display = "block";
    elem_container_temporizador.style.display = "block";
}

function cronometro() {
    div_bloco.style.display = "none";
    elem_div_cronometro.style.display = "block";
    elem_container_cronometro.style.display = "block";
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

function volta(div_voltar) {
    document.getElementById(div_voltar).style.display = "none";
    elem_container_cronometro.style.display = "none";
    elem_container_temporizador.style.display = "none";
    div_bloco.style.display = "block";
}

function mostraAlarmes() {
    var div_alarmes = elem_div_alarmes
    if (div_alarmes.style.display == "block") {
        div_alarmes.style.display = "none";
    } else {
        div_alarmes.style.display = "block";
    }
}

document.getElementById("puxa-div").addEventListener("click", function () {
    elem_div_alarmes.style.display = "block";

    elem_div_alarmes.classList.toggle("move-esquerda"); // Adiciona ou remove a classe para mover a div
    elem_puxa_alarmes.classList.toggle("move-esquerda");
    elem_puxa_div_alarmes.classList.toggle("move-esquerda");
    elem_puxa_div_todo.classList.toggle("move-esquerda");
    
});