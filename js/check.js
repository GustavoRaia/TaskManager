var num_check = 0; // Valor atual do Alarme na sequência

function adicionarProduto() {

    var divCheck = document.createElement("div");
    divCheck.classList.add("produto", "mx-auto", "mt-3");

    divCheck.innerHTML =
    "<div class='mb-4 p-2 px-3 bg-dark sombra4 borda3 d-flex flex-row'>" +
    "<input type='checkbox' class='col-md-3 form-check-input my-auto'>" +

    "<div class='col-md-7 my-auto px-3' style='width: 13em'>" + document.getElementById('input-titulo-check').value  + "</div>" +

    `<button type="button" class="btn btn-outline-danger btnRemoverProduto col-md-2 mx-2 p-1 button-lixeira">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg>
    </button>` +
    // "<button style='border: none; background-color: transparent'>" + "<img width='25' src='./imagem/lata-de-lixo.png' class='col-md-3 form-check-label' alt=''>" + "</button>" +
    // "<img onclick='excluirAlarme(" + num_check + ")' class='img-lata-lixo lixo" + num_check++ + "' src='./imagem/lata-de-lixo.png' alt=''>" +
    "</div>"

    document.getElementById("to-do-list").appendChild(divCheck);

    divCheck
        .querySelector(".btnRemoverProduto")
        .addEventListener("click", () => {
            divCheck.remove();
        });
}

document
    .getElementById("adicionar-check")
    .addEventListener("click", adicionarProduto);