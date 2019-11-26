var num = prompt("Escriu un numero: ")
var es_primo = true
for (var i = 2; i < num; i ++) {
    if (num % i == 0) es_primo = false; break;
}
document.write("El numero " + num + (es_primo ? " es primo." : " no es primo."))
