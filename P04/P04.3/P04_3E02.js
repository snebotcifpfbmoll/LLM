function fahrenheit() {
    var f = document.getElementById("fahrenheit");
    var c = document.getElementById("celsius");
    var k = document.getElementById("kelvin");
    var fval = f.value;
    c.value = (fval - 32) / 1.8;
    k.value = ((fval - 32) / 1.8) + 273.15;
}

function celsius() {
    var f = document.getElementById("fahrenheit");
    var c = document.getElementById("celsius");
    var k = document.getElementById("kelvin");
    var cval = c.value;
    f.value = (cval * 1.8) + 32;
    k.value = cval + 273.15;
}

function kelvin() {
    var f = document.getElementById("fahrenheit");
    var c = document.getElementById("celsius");
    var k = document.getElementById("kelvin");
    var kval = k.value;
    f.value = ((kval - 273.15) * 1.8) + 32;
    c.value = kval - 273.15;
}
