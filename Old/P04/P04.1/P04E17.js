var num_1 = prompt("Escriu un numero: ")
var num_2 = prompt("Escriu un altre numero: ")
var num_min = (num_1 <= num_2 ? num_1 : num_2)
document.write("Els divisors comuns entre " + num_1 + " i " + num_2 + " son: ")
for (var i = 1; i <= num_min; i ++) {
    if (num_1 % i == 0 && num_2 % i == 0) document.write(i + "; ")
}
