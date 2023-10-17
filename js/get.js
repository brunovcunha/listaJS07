usuario = JSON.parse(localStorage.getItem("nome"));

nomeDividido = usuario.nome.split(" ");

if (nomeDividido.length <= 1){
    window.open('erro.html', '_self');
}  else {
    primeiroNome = nomeDividido[0];
    ultimoNome = nomeDividido[nomeDividido.length - 1];

    nomeUsuario = document.getElementById("nomeUsuario").

        innerHTML = primeiroNome + " " + ultimoNome;
}

