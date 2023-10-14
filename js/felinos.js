var gato1 = document.getElementById("gato1");
var gato2 = document.getElementById("gato2");
var gato3 = document.getElementById("gato3");
var gato4 = document.getElementById("gato4");

usuario = JSON.parse(localStorage.getItem("nome"));

primeiroNome = usuario.nome.split(" ")[0];

gato1.addEventListener("click", function() {
    alert("Oi " + primeiroNome + ", tudo bem com você?");
});

var vetorCliques = [];
gato2.addEventListener("click", function() {
    var carinhos = document.getElementById("carinhos");
    carinhos.innerHTML = ++vetorCliques.length;
});

gato3.addEventListener("mouseout", function() {
    gato3.src = "img/gato03.gif";
});

gato3.addEventListener("mouseover", function() {
    gato3.src = "img/gato06.gif";
});

gato4.addEventListener("mouseover", function() {
    var textoGato04 = document.getElementById("textoGato04");
    textoGato04.innerHTML = "Ai, pare de fazer cócegas!";
});

gato4.addEventListener("mouseout", function() {
    var textoGato04 = document.getElementById("textoGato04");
    textoGato04.innerHTML = "lá lá lá lá...";
});

var btnSorteio = document.getElementById("btnSorteio");
btnSorteio.addEventListener("click", function() {
    var numeroSorteado = Math.floor(Math.random() * 100) + 1;
    var numSorteado = document.getElementById("numSorteado");
    numSorteado.value = numeroSorteado;
});
