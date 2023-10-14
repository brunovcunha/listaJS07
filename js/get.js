usuario = JSON.parse(localStorage.getItem("nome"));

nomeDividido = usuario.nome.split(" ");

primeiroNome = nomeDividido[0];
ultimoNome = nomeDividido[nomeDividido.length-1];

nomeUsuario = document.getElementById("nomeUsuario").

innerHTML=primeiroNome+" "+ultimoNome;