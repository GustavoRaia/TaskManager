var conta = 0;

// if (qtd_alarmes.length == 0) {
//     var adicionarAlarme = document.createElement('div');
//     adicionarAlarme.textContent = `gororoba`;
//     adicionarAlarme.classList.add('adicionar-alarme');

//     var listaAlarmes = document.getElementById('listaAlarmes');
//     listaAlarmes.appendChild(adicionarAlarme);
// } else {

// }

function cadastrarAlarme() {
    if (conta >= 7) {
        window.alert("Não é possível cadastrar mais alarmes");
    } else {
        var input_despertador = document.getElementById('input-despertador');
        var input_titulo_despertador = document.getElementById('input-titulo-despertador');

        var novoAlarme = document.createElement('div');
        novoAlarme.textContent = `${input_despertador.value} ${input_titulo_despertador.value}`;
        novoAlarme.classList.add('alarme');

        // var adicionarAlarme = document.createElement('div');
        // adicionarAlarme.textContent = `gororoba`;
        // adicionarAlarme.classList.add('adicionar-alarme');

        var listaAlarmes = document.getElementById('listaAlarmes');
        listaAlarmes.appendChild(novoAlarme);
        // listaAlarmes.appendChild(adicionarAlarme);

        document.getElementById('input-despertador').value = '';
        document.getElementById('input-titulo-despertador').value = '';
    }


    conta++
}