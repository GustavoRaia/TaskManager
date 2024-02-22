var alterna = 0;

// Função de Modo Claro/Escuro
function modo() {

    const classes = ['cor1', 'cor2', 'cor4'];
    const novasCores = ['#49515a05', '#49515a40', '#49515a20']; // Cores correspondentes às classes
    const coresVolta = ['#161618fa', '#1215284e', '#0e101b64']; // Cores correspondentes às classes


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
    document.getElementById('container-cronometro').style.display = "none";
    document.getElementById('container-temporizador').style.display = "none";
    // document.getElementById('bloco-principal').style.display = "block";
    // Adicionar Futuramente o que vai aparecer na Tela Inicial da Página
}

function mostraAlarmes() {
    var div_alarmes = document.getElementById('div-principal');
    if (div_alarmes.style.display == "block") {
        div_alarmes.style.display = "none";
    } else {
        div_alarmes.style.display = "block";
    }
}