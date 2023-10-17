window.addEventListener('load', function () {
    alert('Seja bem vindo!');
});

btnEntrar = document.getElementById("entrar");

btnEntrar.addEventListener("click", function () { cadastrar() });

function cadastrar() {
    usuario = { nome: "" };

    usuario.nome = document.getElementById("nome").value;

    localStorage.setItem("nome", JSON.stringify(usuario));

    if (usuario.nome == "") alert("Não existe nome");
    else window.open('menu.html', '_self');
    
}