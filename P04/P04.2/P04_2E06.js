var lletres = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var num = parseInt(prompt("Introdueix el numero de DNI: "));
var lletra = prompt("Introdueix la lletra del DNI: ");

if (num < 0 || num > 99999999) {
    alert("El numero del DNI no es valid.");
} else {
    console.log("EL DNI: " + num + lletra + (lletres[num % 23] == lletra ? " es valid." : " no es valid."))
}
