var conta = 0; // Q
var alarmes_ativos = [] // Array de Alarmes Ativos
var teste_lixo = 0 // Valor cumulativo para 

function cadastrarAlarme() {
    if (conta >= 5) {
        window.alert("Não é possível cadastrar mais alarmes");

        document.getElementById('input-despertador').value = '';
        document.getElementById('input-titulo-despertador').value = '';
    } else {
        var input_despertador = document.getElementById('input-despertador').value;
        var input_titulo_despertador = document.getElementById('input-titulo-despertador').value;

        if(input_despertador == "" || input_titulo_despertador == "") {
            return;
        }

        alarmes_ativos.push({
            horario_alarme: input_despertador,
            titulo_alarme: input_titulo_despertador,
        })

        var novoAlarme = document.createElement('div');
        novoAlarme.innerHTML = "<div class='alarme'>" +
            input_despertador + "<br/> <div id='span-titulo-alarme'>" +
            input_titulo_despertador + "</div>" +
            "<img onclick='excluirAlarme()' class='img-lata-lixo lixo" + teste_lixo++ + "' src='../imagem/lata-de-lixo.png' alt=''>" +
            "</div>"


        var listaAlarmes = document.getElementById('listaAlarmes');
        listaAlarmes.appendChild(novoAlarme);

        document.getElementById('input-despertador').value = '';
        document.getElementById('input-titulo-despertador').value = '';
    }

    conta++
}

function excluirAlarme() {
    var cu = document.querySelector();
    window.alert(cu);

    conta--
}

function verificaAlarme() {
    const tempo_agora = new Date();
    const horas_agora = tempo_agora.getHours().toString().padStart(2, '0');
    const minutos_agora = tempo_agora.getMinutes().toString().padStart(2, '0');
    const segundos_agora = tempo_agora.getSeconds().toString().padStart(2, '0')
    const relogio_agora = `${horas_agora}:${minutos_agora}`;

    var i = 0;
    for (i in alarmes_ativos) {
        var horar = alarmes_ativos[i].horario_alarme;

        if (relogio_agora == horar && segundos_agora<5) {
            var audio = document.getElementById('audio');
            audio.play();

            setTimeout(function() {
                audio.pause();
                audio.currentTime = 0;
              }, 5000);
        }
    }

}

setInterval(verificaAlarme, 1000);

function validarFormulario() {
    var inputDespertador = document.getElementById("input-despertador").value;
    var inputTituloDespertador = document.getElementById("input-titulo-despertador").value;

    if (inputDespertador.trim() === "" || inputTituloDespertador.trim() === "") {
        return false;
    }

    cadastrarAlarme();
}