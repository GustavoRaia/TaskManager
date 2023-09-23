let temporizador_display;
const temporizadorElement = document.getElementById('span-temp');

const iniciarButtonT = document.getElementById('iniciar_temporizador');
const pausarButtonT = document.getElementById('pausar_temporizador');
const zerarButtonT = document.getElementById('zerar_temporizador');

const inputsHorarios = document.getElementById('div-inputs-temporizador');

var horasT = 0;
var minutosT = 0;
var segundosT = 5;
// var horasT = document.getElementById("horas-temporizador").value;
// var minutosT = document.getElementById("minutos-temporizador").value;
// var segundosT = document.getElementById("segundos-temporizador").value;

var audio = document.getElementById('audio');

function formatarTempoT(h, m, s) {
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function iniciar_temporizadorr() {

  if (horasT === 0 && minutosT === 0 && segundosT === 0) {
    audio.play();
  } else {
    if (horasT < 1 && minutosT < 1) {
      temporizadorElement.style.color = "yellow"
      if (segundosT < 11) {
        temporizadorElement.style.color = "red"
      }
    }

    if (segundosT === 0) {
      if (minutosT === 0) {
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
  temporizadorElement.style.display = "block";
  inputsHorarios.style.display = "none";
  temporizadorElement.textContent = formatarTempoT(horasT, minutosT, segundosT);
}

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