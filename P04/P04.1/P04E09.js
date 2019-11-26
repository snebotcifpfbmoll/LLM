var frase = prompt("Escriu una frase: ");
var count = 0;
for (var i = 0; i < frase.length; i ++) {
    if (frase[i] == "a") count ++;
}
document.write("La lletra 'a' surt " + count + " vegades.");
