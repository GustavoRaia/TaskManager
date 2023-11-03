var alarmes_ativos = []; // Array de Alarmes Ativos
var num_alarme = 0; // Valor atual do Alarme na sequência
var vezes_clicado = 0; // Guarda o número de vezes que um botão foi clicado, para verificações

const validarFormulario = document.getElementById('adicionar-despertador'); // Pega o valor da div de adicionar formulário.
const btnAdicionarAlarme = document.getElementById('adicionar-alarme'); // Pega o valor da div de adicionar alarmes do canto direito da tela 'aba alarmes'.

var audio_alarme = document.getElementById('audio-alarme');
var bloco_span = document.getElementById('span-alarme');
var valor_despertador = document.getElementById('input-despertador');
var valor_titulo_despertador = document.getElementById('input-titulo-despertador');

validarFormulario.addEventListener('click', function() {

    if (alarmes_ativos.length > 0) { // Verifica se o array de alarmes cadastrados está vazio.

        for (let i = 0; i < alarmes_ativos.length; i++) { // Percorre o array de alarmes cadastrados.
            
            if (document.getElementById('input-despertador').value == alarmes_ativos[i].horario_alarme) { // Verifica se o valor do input já está contido no array de alarmes cadastrados.
                window.alert("Não é possível cadastrar alarmes com o mesmo horário."); // Mensagem de erro caso o valor inserido já esteja cadastrado (2 alarmes com o mesmo horário).
                valor_despertador.value = ''; // Limpa o valor do input de horário do despertador.

                return false; // Retorna falso para não cadastrar o alarme com erro.
            }
        }
    }

    if (document.getElementById('input-despertador').value === "" || document.getElementById('input-titulo-despertador').value === "") { // Verifica se os inputs foram enviados vazios.
        window.alert("Preencha os campos.");

        return false; // Retorna falso para não cadastrar o alarme com erro.
    }

    if (alarmes_ativos.length == 10) { // Verifica a qtd de alarmes cadastrados
        window.alert("Não é possível cadastrar mais alarmes"); // Mensagem de erro caso haja o nº máximo de alarmes cadastrados.
        limpaInputD(); // Chama função para limpar o valor dos inputs.

        return false; // Retorna falso para não cadastrar o alarme com erro.
    }

    cadastrarAlarme(); // Se não ocorrer nenhum erro, a função de cadastar alarme é chamada.
});

function excluirAlarme(valor) {

    var valor_alarme_excluir = document.getElementById("alarme-" + valor).textContent; // Pega o elemento com valor do ID que foi clicado.

    var ko = 0;
    for (ko in alarmes_ativos) { // Percorre o Array de alarmes cadastrados.
        if (alarmes_ativos[ko].horario_alarme == valor_alarme_excluir.slice(0, 5)) { // Verifica se o valor do indice é igual ao 'valor' passado como argumento.
            document.getElementById("alarme-" + valor).remove(); // Remove o item com o valor passado como parametro.

            if (alarmes_ativos.length < 11) { // Verifica se existem menos de 10 alarmes cadastrados.
                btnAdicionarAlarme.style.display = "block"; // Se for, a div de adição de alarmes na aba lateral volta a ficar visível.
            }

            num_alarme--; // Decrementa o valor atual do alarme (para uma possível nova adição).

            var remove_aray = alarmes_ativos.indexOf(alarmes_ativos[ko]); // Pega o valor do alarme pelo índice atual.
            alarmes_ativos.splice(remove_aray, 1); // Remove o elemento do Array de alarmes cadastrados.

        }
    }
}

function verificaAlarme() {
    const tempo_agora = new Date(); // Instancia um novo horário
    const horas_agora = tempo_agora.getHours().toString().padStart(2, '0'); // Valor das horas.
    const minutos_agora = tempo_agora.getMinutes().toString().padStart(2, '0'); // Valor dos minutos.
    const segundos_agora = tempo_agora.getSeconds().toString().padStart(2, '0'); // Valor dos segundos.
    const relogio_agora = `${horas_agora}:${minutos_agora}`; // Cria um relógio apenas com o valor das horas e minutos (hh:mm)

    var i = 0;
    for (i in alarmes_ativos) { // Percorre o Array de alarmes cadastrados.
        var horar = alarmes_ativos[i].horario_alarme; //Pega o valor do horario cadastrado.
        var titul = alarmes_ativos[i].titulo_alarme; // Pega o valor do título do alarme cadastrado.

        if (relogio_agora == horar && segundos_agora < 20 && vezes_clicado == 0) { // Verifica se o relógio é igual, se os segundos estão abaixo de 20 e se o botão de parar foi clicado.

            bloco_span.style.display = "block"; // Aparece a div de alarme do respectivo horário (hh:mm:00).

            if (segundos_agora < 1) { // Verifica se a quantidade de segundos é maior que 1.

                if (bloco_span.textContent == "") { // Verifica se o elemento de texto é vazio.
                    var horario_span_alarme = document.createElement('div'); // Cria um elemento de div
                    horario_span_alarme.innerHTML = "<div id='horario-span-alarme'>" + horar + "</div>"; // Adiciona o horário do alarme.
                    bloco_span.appendChild(horario_span_alarme); // Insere na div pai.

                    var titulo_span_alarme = document.createElement('div'); // Cria um novo elemento de div.
                    titulo_span_alarme.innerHTML = "<div id='titulo-span-alarme'>" + titul + "</div>"; // Adiciona o valor do título do alarme.
                    bloco_span.appendChild(titulo_span_alarme); // Insere na div pai.

                    var botao_span_alarme = document.createElement('div'); // Cria um novo elemento de div
                    botao_span_alarme.innerHTML = "<div id='botao-span-alarme' class='sombra1 borda3' onclick='para_alarme()'>" + "Parar" + "</div>"; // Adiciona um botão com evento de clique (função).
                    bloco_span.appendChild(botao_span_alarme); // Insere na div pai.
                }

                audio_alarme.play(); // Inicia o áudio do alarme.
                vezes_clicado++; // Incrementa a quantidade de vezes clicado.

                setTimeout(function () {
                    audio_alarme.pause();  // Para a execução do áudio.
                    bloco_span.style.display = "none"; // O bloco do alarme tocado fica invisível.
                    audio_alarme.currentTime = 0; // Reinicia o valor do audio.
                    vezes_clicado = 0; // Quantidade de vezes clicado para 'parar' no bloco do alarme volta a ser zero. 
                    bloco_span.textContent = ""; // Zera o elemento de texto.
                }, 20000); // Executa a função a cada 20 segundos.

            }
        }
    }

}
setInterval(verificaAlarme, 1000); // Executa a função a cada segundo.

function para_alarme() {
    audio_alarme.pause(); // Pausa o áudio que toca o alarme
    bloco_span.style.display = "none"; // A div que contém o alarme passa a ficar invisível
}

function cadastrarAlarme() {

    alarmes_ativos.push({ // Adiciona ambos os valores ao Array de alarmes cadastrados.
        horario_alarme: document.getElementById('input-despertador').value, // Pega o valor do input do título do alarme cadastrado.
        titulo_alarme: document.getElementById('input-titulo-despertador').value // Pega o valor do input do título do alarme cadastrado.
    })

    var novoAlarme = document.createElement('div'); // Cria um novo elemento para um alarme cadastrado.
    novoAlarme.innerHTML = "<div class='alarme cor1 sombra4 borda3' id='alarme-" + num_alarme + "'>" + // Cria uma div com classes para estilo (descritas no arquivo CSS).
        document.getElementById('input-despertador').value + "<br/> <div id='span-titulo-alarme'>" + // Adiciona o horário do Alarme ao cartão.
        document.getElementById('input-titulo-despertador').value + "</div>" + // Adiciona o Título/Descrição do alarme ao cartão.
        "<img onclick='excluirAlarme(" + num_alarme + ")' class='img-lata-lixo lixo" + num_alarme++ + "' src='./imagem/lata-de-lixo.png' alt=''>" + // Adiciona um evento de botão caso o ícone de lixo seja pressionado.
        "</div>";

    document.getElementById('listaAlarmes').appendChild(novoAlarme); // Adiciona o cartão com as informações do alarme à div com todos os alarmes.

    limpaInputD(); // Chama função para limpar o valor dos inputs.

    if (alarmes_ativos.length == 10) { // Verifica se a quantidade de alarmes cadastrados é igual a 10
        btnAdicionarAlarme.style.display = "none"; // Se for, div de adicionar alarmes na barra lateral passa a não ter mais visibilidade.
    }
}

function limpaInputD() {
    valor_despertador.value = ''; // Limpa o valor do input de horário do despertador.
    valor_titulo_despertador.value = ''; // Limpa o valor do input de descrição do despertador.
}