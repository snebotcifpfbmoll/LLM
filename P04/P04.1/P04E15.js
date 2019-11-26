var num = prompt("Escriu un numero: ")
let divisors = [2, 3, 5, 7]
var divisibles = []
for (var i = 0; i < divisors.length; i ++) {
    if (num % divisors[i] == 0) divisibles += divisors[i];
}
document.write("El numero " + num + " es divisible per " + (divisibles.length > 0 ? divisibles : " cap numero") + ".")
