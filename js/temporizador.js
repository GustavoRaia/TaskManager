let temporizador_display;

let horasT = 0;
let minutosT = 1;
let segundosT = 3;

const temporizadorElement = document.getElementById('span-temp');

const iniciarButtonT = document.getElementById('iniciar_temporizador');
const pausarButtonT = document.getElementById('pausar_temporizador');
const zerarButtonT = document.getElementById('zerar_temporizador');

function formatarTempoT(h, m, s) {
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function iniciar_temporizadorr() {
    if (horasT === 0 && minutosT === 0 && segundosT === 0) {
        window.alert("Zerado!");
      } else {
        
        if(horasT < 1 && minutosT < 1){
            temporizadorElement.style.color = "red"
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
});

zerarButtonT.addEventListener('click', function () {
    clearInterval(temporizador_display);
    temporizador_display = null;

    segundosT = 0;
    minutosT = 0;
    horasT = 0;
    
    temporizadorElement.innerHTML = '00:00:00';
    iniciarButtonT.disabled = false;
});