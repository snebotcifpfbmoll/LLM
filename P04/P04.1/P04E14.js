var num = prompt("Escriu un numero: ");
var divisors = [2, 3, 5, 7];
var es_divisible = false;
for (var i = 0; i < divisors.length; i ++) {
    if (num % divisors[i] == 0) es_divisible = true;
}
document.write("El numero " + num + (es_divisible ? " es " : " no es ") + "divisible per 2, 3, 5 o 7.")
