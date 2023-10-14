btnEntrar = document.getElementById("entrar");

btnEntrar.addEventListener("click", function() {cadastrar()});

function cadastrar() {
    usuario = {nome:""};

    usuario.nome = document.getElementById("nome").value;

    localStorage.setItem("nome", JSON.stringify(usuario));
  

    window.open('menu.html', '_blank');

    nomeUsuario = document.getElementById("nomeUsuario").innerHTML=usuario.nome;
}