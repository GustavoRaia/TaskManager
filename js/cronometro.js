let cronometro0;
let horas = 0;
let minutos = 0;
let segundos = 0;
let milissegundos = 0;

const cronometroElement = document.getElementById('cronometro-tempo');
const iniciarButton = document.getElementById('iniciar_cronometro');
const pausarButton = document.getElementById('pausar_cronometro');
const zerarButton = document.getElementById('zerar_cronometro');

function formatarTempo(h, m, s, ms) {
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
}

function iniciar_cronometro() {
    milissegundos++;
    if (milissegundos === 90) {
        milissegundos = 0;
        segundos++;
        if (segundos === 59) {
            segundos = 0;
            minutos++;
            if (minutos === 59) {
                minutos = 0;
                horas++;
            }
        }
    }
    cronometroElement.textContent = formatarTempo(horas, minutos, segundos, milissegundos);
}

iniciarButton.addEventListener('click', function () {
    if (!cronometro0) {
        cronometro0 = setInterval(iniciar_cronometro, 10); // Iniciar o cronômetro a cada segundo
        iniciarButton.disabled = true;
    }
});

pausarButton.addEventListener('click', function () {
    clearInterval(cronometro0); // Pausar o cronômetro
    cronometro0 = null;
    iniciarButton.disabled = false;
});

zerarButton.addEventListener('click', function () {
    clearInterval(cronometro0); // Pausar o cronômetro (se estiver em execução)
    cronometro0 = null;
    milissegundos = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    cronometroElement.innerHTML = '00:00:00.<span class="span-milissegundos">00</span>';
    iniciarButton.disabled = false;
});