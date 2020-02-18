var num = [];
num += parseInt(prompt("Escriu un numero: "));
num += parseInt(prompt("Escriu un altre numero: "));
num += parseInt(prompt("Escriu un altre numero: "));
var num_major = 0;
for (var i = 0; i < 3; i ++) {
    console.log(num[i] + num_major);
    if (parseInt(num[i]) > parseInt(num_major)) num_major = parseInt(num[i]);
}
document.write(num_major);
