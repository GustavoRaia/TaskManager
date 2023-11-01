// Funções de formatação de tempo ---------------

let horasCronometro = 0; // Valor inicial de horas.
let minutosCronometro = 0; // Valor inicial de minutos.
let segundosCronometro = 0; // Valor inicial de segundos.
let milissegundos = 0; // Valor inicial de milissegundos.

const cronometroElement = document.getElementById('span-smh'); // Pega o valor da div de horas, minutos e segundos.
const milissegundosElement = document.getElementById('span-milissegundos'); // Pega o valor da div de milissegundos.

// Função para formatar tempo (horas, minutos e segundos).
function formatarTempoC(h, m, s) {
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// Função que atualiza o cronômetro principal
function iniciar_cronometro() {
    segundosCronometro++; // Aumenta o valor de segundos.
    if (segundosCronometro === 60) { // Quando o valor de segundos for igual a 60.
        segundosCronometro = 0;      // o valor de segundos volta a zero.
        minutosCronometro++;         // e o valor de minutos é incrementado em um.
        if (minutosCronometro === 60) { // Quando o valor de minutos for igual a 60.
            minutosCronometro = 0;      // o valor de minutos volta a zero.
            horasCronometro++;          // e o valor das horas é incrementado em um.
        }
    }
    cronometroElement.textContent = formatarTempoC(horasCronometro, minutosCronometro, segundosCronometro); // Mostra na div o valor formatado do cronômetro (horas, minutos e segundos).
}

// Função para formatar o tempo (apenas milissegundos).
function formatarTempoCMilissegundos(ms) {
    return ms.toString().padStart(2, '0');
}
// Função que atualiza o cronômetro de milissegundos.
function atualizarCronometroMilissegundos() {
    milissegundos++; // Incrementa o valor de milissegundos.
    if (milissegundos === 100) { // Quando o valor de milissegundos for igual a 100.
        milissegundos = 0;       // zera o valor de milissegundos.
    }
    milissegundosElement.textContent = formatarTempoCMilissegundos(milissegundos); // Mostra na div o valor formatado dos milissegundos.
}

// Botões do Cronômetro -------------------------

let cronometro_display;
let cronometroMilissegundos;

const iniciarButton = document.getElementById('iniciar_cronometro'); // Pega o valor da div do botão de 'Iniciar Cronômetro'.
const pausarButton = document.getElementById('pausar_cronometro'); // Pega o valor da div do botão de 'Pausar Cronômetro'.
const zerarButton = document.getElementById('zerar_cronometro'); // Pega o valor da div do botão de 'Zerar Cronômetro'.

// Função ativada ao clicar no botão 'Iniciar'
iniciarButton.addEventListener('click', function () {
    if (!cronometro_display) { // Verifica se o cronômetro está em execução.
        cronometro_display = setInterval(iniciar_cronometro, 1000); // Atualiza a função a cada segundo.
        cronometroMilissegundos = setInterval(atualizarCronometroMilissegundos, 10); // Atualiza a função a cada 10 milissegundos.
        iniciarButton.disabled = true; // Desativa a possibilidade do botção ser clicado novamente.
    }
});

// Função ativada ao clicar no botão 'Pausar'.
pausarButton.addEventListener('click', function () {
    formataCronometro(); // Chama a função que zera o cronômetro.

    iniciarButton.disabled = false; // Botão de iniciar o cronômetro pode ser clicado novamente.
});

// Função ativada ao clicar no botão 'Zerar'
zerarButton.addEventListener('click', function () {
    formataCronometro(); // Chama a função que zera o cronômetro.

    milissegundos = 0; // Zera o valor REAL de milissegundos.
    segundosCronometro = 0; // Zera o valor REAL de segundos.
    minutosCronometro = 0; // Zera o valor REAL de minutos.
    horasCronometro = 0; // Zera o valor REAL de horas.
    
    cronometroElement.innerHTML = '00:00:00'; // Volta o valor do cronômetro VISÍVEL para 0 (hh:mm:ss).

    milissegundosElement.innerHTML = '00'; // Volta o valor VISÍVEL de milissegundos para 0.

    iniciarButton.disabled = false; // Botão de iniciar o cronômetro pode ser clicado novamente.
});

function formataCronometro() {
    clearInterval(cronometro_display); // Para a execução.
    clearInterval(cronometroMilissegundos); // Para a execução.
    cronometro_display = null; // A execução do cronômetro passa a ser 'null'.
    cronometroMilissegundos = null; // A execução do cronômetro de milissegundos passa a ser 'null'.
}