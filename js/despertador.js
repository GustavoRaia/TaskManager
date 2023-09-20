var conta = 0;

function cadastrarAlarme() {
    if (conta >= 5) {
        window.alert("Não é possível cadastrar mais alarmes");

        document.getElementById('input-despertador').value = '';
        document.getElementById('input-titulo-despertador').value = '';
    } else {
        var input_despertador = document.getElementById('input-despertador').value;
        var input_titulo_despertador = document.getElementById('input-titulo-despertador').value;

        var novoAlarme = document.createElement('div');

        novoAlarme.innerHTML = "<div class='alarme'>" + 
                                    input_despertador + "<br/> <div id='span-titulo-alarme'>" + 
                                    input_titulo_despertador + "</div>" + 
                                    "<img onclick='excluirAlarme()' class='img-lata-lixo' src='../imagem/lata-de-lixo.png' alt=''>" +
                                "</div>"
        

        var listaAlarmes = document.getElementById('listaAlarmes');
        listaAlarmes.appendChild(novoAlarme);

        document.getElementById('input-despertador').value = '';
        document.getElementById('input-titulo-despertador').value = '';
    }

    conta++
}

function excluirAlarme() {
    window.alert("Funcionalidade lata de lixo");
}