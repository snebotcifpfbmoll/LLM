var frase = prompt("Escriu una frase: ");
var count = 0;
for (var i = 0; i < frase.length; i ++) {
    switch (frase[i]) {
        case 'a':
            count ++;
            break;
        case 'e':
            count ++;
            break;
        case 'i':
            count ++;
            break;
        case 'o':
            count ++;
            break;
        case 'u':
            count ++;
            break;
        default:
            break;
    }
}
document.write("La frase conté " + frase.length + " caràcters dels quals " + count + " són vocals.");
