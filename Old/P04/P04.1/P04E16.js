var num = prompt("Escriu un numero: ")
document.write("Els divisors de " + num + " son: ")
for (var i = 1; i <= num; i ++) {
    if (num % i == 0) document.write(i + "; ")
}
