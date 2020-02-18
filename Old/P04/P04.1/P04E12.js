var frase = prompt("Escriu una frase: ");
var acount = 0;
var ecount = 0;
var icount = 0;
var ocount = 0;
var ucount = 0;
for (var i = 0; i < frase.length; i ++) {
    switch (frase[i]) {
        case 'a':
            acount ++;
            break;
        case 'e':
            ecount ++;
            break;
        case 'i':
            icount ++;
            break;
        case 'o':
            ocount ++;
            break;
        case 'u':
            ucount ++;
            break;
        default:
            break;
    }
}
document.write("a: " + acount + ", e: " + ecount + ", i: " + icount + ", o: " + ocount + ", u: " + ucount)
