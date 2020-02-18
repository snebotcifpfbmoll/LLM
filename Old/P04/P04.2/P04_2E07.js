var num = parseInt(prompt("Introdueix un numero: "));
var result = 1;
for (var i = 1; i <= num; i ++) {
    result *= i;
}
console.log("El factorial de " + num + " es " + result);
