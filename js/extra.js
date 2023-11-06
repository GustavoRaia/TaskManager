var alterna = 0;

// Função de Modo Claro/Escuro
function modo() {

    const classes = ['cor1', 'cor2', 'cor4'];
    const novasCores = ['#49515a05', '#49515a40', '#49515a20']; // Cores correspondentes às classes
    const coresVolta = ['#0e101b', '#1215284e', '#0e101b64']; // Cores correspondentes às classes


    if(alterna == 0) {
        for (let i = 0; i < classes.length; i++) {
            const elementos = document.querySelectorAll('.' + classes[i]);

            elementos.forEach(function (elemento) {
                elemento.style.backgroundColor = novasCores[i];
            });
        }
        document.querySelector('#modo-claro-escuro img').setAttribute('src', "./imagem/forma-de-meia-lua.png");
        alterna = 1;
    } else if (alterna == 1) {
        for (let i = 0; i < classes.length; i++) {
            const elementos2 = document.querySelectorAll('.' + classes[i]);

            elementos2.forEach(function (elemento) {
                elemento.style.backgroundColor = coresVolta[i];
            });
        }
        document.querySelector('#modo-claro-escuro img').setAttribute('src', "./imagem/brilho-do-sol.png");
        alterna = 0;

    }
}

// ==============================================

function volta(div_voltar) {
    document.getElementById(div_voltar).style.display = "none";
    elem_container_cronometro.style.display = "none";
    elem_container_temporizador.style.display = "none";
    div_bloco.style.display = "block";
}

function mostraAlarmes() {
    var div_alarmes = elem_div_alarmes
    if (div_alarmes.style.display == "block") {
        div_alarmes.style.display = "none";
    } else {
        div_alarmes.style.display = "block";
    }
}

// ==============================================

document.getElementById("puxa-div").addEventListener("click", function () {
    elem_div_alarmes.style.display = "block";

    elem_div_alarmes.classList.toggle("move-esquerda"); // Adiciona ou remove a classe para mover a div
    elem_puxa_alarmes.classList.toggle("move-esquerda");
    elem_puxa_div_alarmes.classList.toggle("move-esquerda");
    elem_puxa_div_todo.classList.toggle("move-esquerda");
    
});

document.getElementById("puxa-div-alarmes").addEventListener("click", function () {
    document.getElementById('div-alarmes3').style.display = "none";
    document.getElementById('div-alarmes').style.display = "block";
});

document.getElementById("puxa-div-todo").addEventListener("click", function () {
    document.getElementById('div-alarmes').style.display = "none";
    document.getElementById('div-alarmes3').style.display = "block";
});

// ==============================================

var mudaSrcSeta = 0

function mudaSeta() {
    if(mudaSrcSeta == 0) {
        document.querySelector('#puxa-div img').setAttribute('src', "./imagem/simbolo-de-setas-duplas-para-a-direita-para-avancar.png");
        mudaSrcSeta = 1;
    } else if (mudaSrcSeta == 1) {
        document.querySelector('#puxa-div img').setAttribute('src', "./imagem/simbolo-de-setas-duplas-para-a-esquerda.png");
        mudaSrcSeta = 0;
    }
}