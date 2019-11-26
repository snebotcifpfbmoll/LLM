function llevarEspais(frase) {
    var res = "";
    for (var i = 0; i < frase.length; i ++) {
        if (frase[i] != " ") res += frase[i];
    }
    return res;
}
function girarCadena(frase) {
    return frase.split("").reverse().join("");
}
function comprovarPalindrom(frase) {
    var frase_1 = llevarEspais(frase.toLowerCase());
    var frase_2 = girarCadena(frase_1);
    if (frase_1 == frase_2) {
        console.log("La frase és un palíndrom.");
    } else {
        console.log("La frase no és un palíndrom.");
    }
}

var frase = prompt("Introdueix una frase: ");
comprovarPalindrom(frase);
