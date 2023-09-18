let cronometro0;
let cronometroMilissegundos;
let horas = 0;
let minutos = 0;
let segundos = 0;
let milissegundos = 0;

const cronometroElement = document.getElementById('span-smh');
const milissegundosElement = document.getElementById('span-milissegundos');
const iniciarButton = document.getElementById('iniciar_cronometro');
const pausarButton = document.getElementById('pausar_cronometro');
const zerarButton = document.getElementById('zerar_cronometro');

function formatarTempo(h, m, s) {
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function iniciar_cronometro() {
    segundos++;
    if (segundos === 59) {
        segundos = 0;
        minutos++;
        if (minutos === 59) {
            minutos = 0;
            horas++;
        }
    }
    cronometroElement.textContent = formatarTempo(horas, minutos, segundos);
}

function formatarTempoMilissegundos(ms) {
    return ms.toString().padStart(2, '0');
}

function atualizarCronometroMilissegundos() {
    milissegundos++;
    if (milissegundos === 100) {
        milissegundos = 0;
    }
    milissegundosElement.textContent = formatarTempoMilissegundos(milissegundos);
}

iniciarButton.addEventListener('click', function () {
    if (!cronometro0) {
        cronometro0 = setInterval(iniciar_cronometro, 1000);
        cronometroMilissegundos = setInterval(atualizarCronometroMilissegundos, 10);
        iniciarButton.disabled = true;
    }
});

pausarButton.addEventListener('click', function () {
    clearInterval(cronometro0);
    cronometro0 = null;
    clearInterval(cronometroMilissegundos);
    cronometroMilissegundos = null;
    iniciarButton.disabled = false;
});

zerarButton.addEventListener('click', function () {
    clearInterval(cronometro0);
    clearInterval(cronometroMilissegundos);
    cronometro0 = null;
    // cronometroMilissegundos = null;
    milissegundos = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    cronometroElement.innerHTML = '00:00:00 ';
    milissegundosElement.innerHTML = '00';
    iniciarButton.disabled = false;
});