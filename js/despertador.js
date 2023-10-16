var qtd_alarmes = 0; // Q
var alarmes_ativos = [] // Array de Alarmes Ativos
var teste_lixo = 0 // Valor cumulativo para 

var audio = document.getElementById('audio');
var bloco_span = document.getElementById('span-alarme');

function cadastrarAlarme() {
    if (qtd_alarmes >= 5) { // Verifica  a qtd de alarmes cadastrados
        window.alert("Não é possível cadastrar mais alarmes"); // Mensagem de erro caso haja o nº máximo de alarmes cadastrados.

        document.getElementById('input-despertador').value = '';
        document.getElementById('input-titulo-despertador').value = '';
    } else {
        var input_despertador = document.getElementById('input-despertador').value;
        var input_titulo_despertador = document.getElementById('input-titulo-despertador').value;

        if (input_despertador == "" || input_titulo_despertador == "") {
            return;
        }

        alarmes_ativos.push({
            horario_alarme: input_despertador,
            titulo_alarme: input_titulo_despertador,
        })

        var novoAlarme = document.createElement('div');
        novoAlarme.innerHTML = "<div class='alarme cor1 sombra4 borda3'>" +
            input_despertador + "<br/> <div id='span-titulo-alarme'>" +
            input_titulo_despertador + "</div>" +
            "<img onclick='excluirAlarme()' class='img-lata-lixo lixo" + teste_lixo++ + "' src='../imagem/lata-de-lixo.png' alt=''>" +
            "</div>"


        var listaAlarmes = document.getElementById('listaAlarmes');
        listaAlarmes.appendChild(novoAlarme);

        document.getElementById('input-despertador').value = '';
        document.getElementById('input-titulo-despertador').value = '';
    }

    qtd_alarmes++; // Incrementa a quantidade de alarmes cadastrados.
}

function excluirAlarme() {
    window.alert("Botão Excluir Alarme Clicado.");

    qtd_alarmes--; // Decrementa a quantidade de alarmes cadastrados.
}

function verificaAlarme() {
    const tempo_agora = new Date();
    const horas_agora = tempo_agora.getHours().toString().padStart(2, '0');
    const minutos_agora = tempo_agora.getMinutes().toString().padStart(2, '0');
    const segundos_agora = tempo_agora.getSeconds().toString().padStart(2, '0')
    const relogio_agora = `${horas_agora}:${minutos_agora}`;

    var i = 0;
    for (i in alarmes_ativos) {
        var horar = alarmes_ativos[i].horario_alarme; //Pega o valor
        var titul = alarmes_ativos[i].titulo_alarme;

        if (relogio_agora == horar && segundos_agora < 20) {

            bloco_span.style.display = "block"; // Aparece a div de alarme do respectivo horário (hh:mm:00)

            if (segundos_agora < 1) {
                var horario_span_alarme = document.createElement('div');
                horario_span_alarme.innerHTML = "<div id='horario-span-alarme'>" + horar + "</div>";

                var titulo_span_alarme = document.createElement('div');
                titulo_span_alarme.innerHTML = "<div id='titulo-span-alarme'>" + titul + "</div>";

                var botao_span_alarme = document.createElement('div');
                botao_span_alarme.innerHTML = "<div id='botao-span-alarme' class='sombra1 borda3' onclick='para_alarme()'>" + "Parar" + "</div>";

                bloco_span.appendChild(horario_span_alarme);
                bloco_span.appendChild(titulo_span_alarme);
                bloco_span.appendChild(botao_span_alarme);

                audio.play();

                setTimeout(function () {
                    audio.pause();
                    bloco_span.style.display = "none";
                    audio.currentTime = 0;
                }, 20000);
            }

            // audio.play();

            // setTimeout(function() {
            //     audio.pause();
            //     bloco_span.style.display = "none";
            //     audio.currentTime = 0;
            //   }, 20000);
        }
    }

}

setInterval(verificaAlarme, 1000);

function validarFormulario() {
    var inputDespertador = document.getElementById("input-despertador").value;
    var inputTituloDespertador = document.getElementById("input-titulo-despertador").value;

    var indice = 0;
    for (indice in alarmes_ativos) {
        if (inputDespertador == alarmes_ativos[indice].horario_alarme) {
            return false;
        }
    }
    if (inputDespertador === "" || inputTituloDespertador === "") {
        return false;
    }

    cadastrarAlarme();
}

function para_alarme() {
    audio.pause();
    bloco_span.style.display = "none";
}