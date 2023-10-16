let temporizador_display;
const temporizadorElement = document.getElementById('span-temp');

const iniciarButtonT = document.getElementById('iniciar_temporizador');
const pausarButtonT = document.getElementById('pausar_temporizador');
const zerarButtonT = document.getElementById('zerar_temporizador');
const pegarValor = document.getElementById('confirmar-valor');

const inputsHorarios = document.getElementById('div-inputs-temporizador');

var audio = document.getElementById('audio');
audio.pause();

function formatarTempoT(h, m, s) {
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function iniciar_temporizadorr() {
  var sup = document.getElementById('span-temp').textContent; // Pega o valor na variável (possui 6 casas).
  var horasT = sup[0] + sup[1]; // Valor das horas são as duas primeiras casas da variável.
  var minutosT = sup[3] + sup[4]; // Valor dos minutos são as terceira e quarta casas da variável.
  var segundosT = sup[6] + sup[7]; // Valor dos segundos são as duas últimas casas da variável.

  if (horasT == 0 && minutosT == 0 && segundosT == 0) {
    audio.play(); // Toca o áudio quando o temporizador estiver zerado.
  } else {
    if (horasT < 1 && minutosT < 1) {
      // Altera a cor da fonte para amarela quando o tempo para acabar for menor que 1 minuto.
      temporizadorElement.style.color = "yellow"
      if (segundosT < 11) {
        // Altera a cor da fonte para vermelha quando o tempo para acabar for menor que 10 segundos.
        temporizadorElement.style.color = "red"
      }
    }

    if (segundosT == 0) { // Se segundos for igual a zero.
      if (minutosT == 0) { // Se minutos forem igual a zero.
        horasT--; // Diminui o valor das horas.
        minutosT = 59; // Minutos volta para 59.
      } else { // Senão
        minutosT--; // Abaixa o valor dos minutos em uma casa.
      }
      segundosT = 59; // Valor de segundos volta para 59.
    } else { // Se segundos for diferente de zero.
      segundosT--; // Apenas abaixa o valor de segundos em uma casa.
    }
  }
  temporizadorElement.textContent = formatarTempoT(horasT, minutosT, segundosT); // Formata o tempo e exibe na div.
}

// Função para definir o valor do temporizador.
pegarValor.addEventListener('click', function () {
  var horasTemp = document.getElementById("horas-temporizador").value; // Pega o valor do input destinado às horas.
  var minutosTemp = document.getElementById("minutos-temporizador").value; // Pega o valor do input destinado aos minutos.
  var segundosTemp = document.getElementById("segundos-temporizador").value; // Pega o valor do input destinado aos segundos.

  // Verifica se algum valor está excedendo o limite máximo (horas, minutos ou segundos) ou se há algum valor negativo.
  if(segundosTemp>59 || minutosTemp > 59 || horasTemp > 23 || segundosTemp < 0 || minutosTemp < 0 || horasTemp < 0) {
    document.getElementById('horas-temporizador').value = ""; // Zera o valor do input das horas.
    document.getElementById('minutos-temporizador').value = ""; // Zera o valor do input dos minutos.
    document.getElementById('segundos-temporizador').value = ""; // Zera o valor do input dos segundos.
    return window.alert("Insira apenas valores possíveis"); // Retorna uma mensagem de erro.
  }

  temporizadorElement.style.display = "block"; // Display com o valor do temporizador passa a ser visível.
  inputsHorarios.style.display = "none"; // Display dos inputs de horário (h, m, s) passam a ser invisíveis.

  temporizadorElement.textContent = formatarTempoT(horasTemp, minutosTemp, segundosTemp); // Formata o tempo e exibe na div (estático)

  iniciarButtonT.disabled = true; // Desativa o clique no botão de iniciar
});

// Função de iniciar a contagem
iniciarButtonT.addEventListener('click', function () {
  if (!temporizador_display) {
    temporizador_display = setInterval(iniciar_temporizadorr, 1000); // Aciona a função a cada 1 segundo.

    iniciarButtonT.disabled = true; // Desativa o clique no botão de iniciar.
  }
});

// Função para pausar a contagem
pausarButtonT.addEventListener('click', function () {
  clearInterval(temporizador_display); // Pausa a execução.
  temporizador_display = null; // A execução do temporizador passa a ser 'null'.
  iniciarButtonT.disabled = false; // Ativa o botão de iniciar contagem, que funcionará para "reiniciar" a contagem de onde foi parado.
  // audio.pause();
  audio.currentTime = 0;
});

// Função para resetar o valor da contagem
zerarButtonT.addEventListener('click', function () {
  clearInterval(temporizador_display); // Para a execução.
  temporizador_display = null; // A execução do temporizador passa a ser 'null'.

  document.getElementById('horas-temporizador').value = ""; // Zera o valor do input das horas.
  document.getElementById('minutos-temporizador').value = ""; // Zera o valor do input dos minutos.
  document.getElementById('segundos-temporizador').value = ""; // Zera o valor do input dos segundos.

  temporizadorElement.innerHTML = '00:00:00'; // Valor do display passa a ser zerado.
  iniciarButtonT.disabled = false; // Botão de iniciar a contagem volta a poder ser clicado.

  temporizadorElement.style.display = "none"; // Display da contagem do temporizador desaparece
  inputsHorarios.style.display = "block"; // Display de definir os horários (h, m, s) volta a aparecer.

  audio.pause(); // Para a execução do áudio.
  audio.currentTime = 0; // Reinicia o valor do áudio para o início
});