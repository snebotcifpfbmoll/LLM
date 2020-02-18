function conte(arr, vocal) {
    for (var i = 0; i < arr.length; i ++) if (arr[i] == vocal) return true;
    return false;
}

var frase = prompt("Escriu una frase: ");
var vocals = [];
for (var i = 0; i < frase.length; i ++) {
    switch (frase[i]) {
        case 'a':
            if (!conte(vocals, 'a')) vocals += 'a';
            break;
        case 'e':
            if (!conte(vocals, 'e')) vocals += 'e';
            break;
        case 'i':
            if (!conte(vocals, 'i')) vocals += 'i';
            break;
        case 'o':
            if (!conte(vocals, 'o')) vocals += 'o';
            break;
        case 'u':
            if (!conte(vocals, 'u')) vocals += 'u';
            break;
        default:
            break;
    }
}

document.write("La frase conté les següents vocals: " + vocals);
