let cronometro_display;
let cronometroMilissegundos;

let horasC = 0;
let minutosC = 0;
let segundosC = 0;
let milissegundos = 0;

const cronometroElement = document.getElementById('span-smh');
const milissegundosElement = document.getElementById('span-milissegundos');

const iniciarButton = document.getElementById('iniciar_cronometro');
const pausarButton = document.getElementById('pausar_cronometro');
const zerarButton = document.getElementById('zerar_cronometro');

function formatarTempoC(h, m, s) {
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function iniciar_cronometro() {
    segundosC++;
    if (segundosC === 60) {
        segundosC = 0;
        minutosC++;
        if (minutosC === 60) {
            minutosC = 0;
            horasC++;
        }
    }
    cronometroElement.textContent = formatarTempoC(horasC, minutosC, segundosC);
}

function formatarTempoCMilissegundos(ms) {
    return ms.toString().padStart(2, '0');
}

function atualizarCronometroMilissegundos() {
    milissegundos++;
    if (milissegundos === 100) {
        milissegundos = 0;
    }
    milissegundosElement.textContent = formatarTempoCMilissegundos(milissegundos);
}

iniciarButton.addEventListener('click', function () {
    if (!cronometro_display) {
        cronometro_display = setInterval(iniciar_cronometro, 1000);
        cronometroMilissegundos = setInterval(atualizarCronometroMilissegundos, 10);
        iniciarButton.disabled = true;
    }
});

pausarButton.addEventListener('click', function () {
    clearInterval(cronometro_display);
    cronometro_display = null;
    clearInterval(cronometroMilissegundos);
    cronometroMilissegundos = null;
    iniciarButton.disabled = false;
});

zerarButton.addEventListener('click', function () {
    clearInterval(cronometro_display);
    clearInterval(cronometroMilissegundos);
    cronometro_display = null;
    cronometroMilissegundos = null;

    milissegundos = 0;
    segundosC = 0;
    minutosC = 0;
    horasC = 0;
    
    cronometroElement.innerHTML = '00:00:00';
    milissegundosElement.innerHTML = ' 00';
    iniciarButton.disabled = false;
});