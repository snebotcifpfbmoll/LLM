function comprovarNum(num) {
    return (num % 2 == 0 ? "El numero " + num + " es parell." : "El numero " + num + " no es parell.");
}
var n = parseInt(prompt("Introdueix un numero: "));
console.log(comprovarNum(n));
