function info(str) {
    if (str == str.toLowerCase()) {
        console.log("La cadena està en minúscules.");
    } else if (str == str.toUpperCase()) {
        console.log("La cadena està en majúscules.");
    } else {
        console.log("La cadena està en majúscules i minúscules.");
    }
}

var str = prompt("Introdueix un texte: ");
info(str);
