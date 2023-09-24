let temporizador_display;
const temporizadorElement = document.getElementById('span-temp');

const iniciarButtonT = document.getElementById('iniciar_temporizador');
const pausarButtonT = document.getElementById('pausar_temporizador');
const zerarButtonT = document.getElementById('zerar_temporizador');
const pegarValor = document.getElementById('confirmar-valor');

const inputsHorarios = document.getElementById('div-inputs-temporizador');

var audio = document.getElementById('audio');

function formatarTempoT(h, m, s) {
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function iniciar_temporizadorr() {
  var sup = document.getElementById('span-temp').textContent; 
  var horasT = sup[0] + sup[1];
  var minutosT = sup[3] + sup[4];
  var segundosT = sup[6] + sup[7];

  if (horasT == 0 && minutosT == 0 && segundosT == 0) {
    audio.play();
  } else {
    if (horasT < 1 && minutosT < 1) {
      temporizadorElement.style.color = "yellow"
      if (segundosT < 11) {
        temporizadorElement.style.color = "red"
      }
    }

    if (segundosT == 0) {
      if (minutosT == 0) {
        horasT--;
        minutosT = 59;
      } else {
        minutosT--;
      }
      segundosT = 59;
    } else {
      segundosT--;
    }
  }
  temporizadorElement.textContent = formatarTempoT(horasT, minutosT, segundosT);
}

pegarValor.addEventListener('click', function () {
  var horasTemp = document.getElementById("horas-temporizador").value;
  var minutosTemp = document.getElementById("minutos-temporizador").value;
  var segundosTemp = document.getElementById("segundos-temporizador").value;

  if(segundosTemp>59 || minutosTemp > 59 || horasTemp > 23 || segundosTemp < 0 || minutosTemp < 0 || horasTemp < 0) {
    document.getElementById('horas-temporizador').value = "";
    document.getElementById('minutos-temporizador').value = "";
    document.getElementById('segundos-temporizador').value = "";
    return window.alert("Insira apenas valores possíveis");
  }

  temporizadorElement.style.display = "block";
  inputsHorarios.style.display = "none";

  temporizadorElement.textContent = formatarTempoT(horasTemp, minutosTemp, segundosTemp);

  iniciarButtonT.disabled = true;
});

iniciarButtonT.addEventListener('click', function () {
  if (!temporizador_display) {
    temporizador_display = setInterval(iniciar_temporizadorr, 1000);

    iniciarButtonT.disabled = true;
  }
});

pausarButtonT.addEventListener('click', function () {
  clearInterval(temporizador_display);
  temporizador_display = null;
  iniciarButtonT.disabled = false;
  audio.pause();
  audio.currentTime = 0;
});

zerarButtonT.addEventListener('click', function () {
  clearInterval(temporizador_display);
  temporizador_display = null;

  document.getElementById('horas-temporizador').value = "";
  document.getElementById('minutos-temporizador').value = "";
  document.getElementById('segundos-temporizador').value = "";

  temporizadorElement.innerHTML = '00:00:00';
  iniciarButtonT.disabled = false;

  temporizadorElement.style.display = "none";
  inputsHorarios.style.display = "block";

  audio.pause();
  audio.currentTime = 0;
});