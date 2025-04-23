gerarCor = function() {
    var cor = "#";
    var letras = "0123456789ABCDEF";
    for (var i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    document.getElementById("colorBox").style.backgroundColor = cor;
    document.getElementById("hexColorCode").textContent = cor;

}