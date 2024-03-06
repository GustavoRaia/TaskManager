var num_check = 0; // Valor atual do Alarme na sequência

function adicionarCheck() {

    if (document.getElementById('input-titulo-check').value == "") {
        window.alert('Adicione uma descrição para a tarefa');
        return;
    }

    var divCheck = document.createElement("div");
    divCheck.classList.add("check", "mx-auto", "mb-3");

    divCheck.innerHTML =
    "<div class='p-2 px-3 bg-dark sombra4 borda3 d-flex flex-row gap-1'>" +
    "<input type='checkbox' class='col-md-3 form-check-input my-auto'>" +

    "<div class='col-md-7 my-auto px-3' style='width: 13em'>" + document.getElementById('input-titulo-check').value  + "</div>" +

    "<button type='button' class='btn btn-outline-danger btnRemoverProduto col-md-2 mx-2 p-1' style='max-height: 4vh'>" +
    "<img width='25' src='./imagem/lata-de-lixo.png'> </button> </div>";

    document.getElementById("to-do-list").appendChild(divCheck);
    document.getElementById('input-titulo-check').value = '';

    divCheck
        .querySelector(".btnRemoverProduto")
        .addEventListener("click", () => {
            divCheck.remove();
        });

    divCheck
        .querySelector(".form-check-input")
        .addEventListener("click", () => {
            if(num_check == 0) {
                divCheck.style.opacity = '0.5';
                num_check += 1;
            } else {
                divCheck.style.opacity = '1';
                num_check -= 1;
            }

        });
}

document
    .getElementById("adicionar-check")
    .addEventListener("click", adicionarCheck);