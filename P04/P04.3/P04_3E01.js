var columnes = parseInt(prompt("Introdueix el nombre de columnes que vols: "));
var files = parseInt(prompt("Introdueix el nombre de files que vols: "));
var resultat = []
var div = document.getElementById("table");
if (div !== null) {
    var table = document.createElement("table");
    for (var i = 0; i <= files; i ++) {
        var columna = document.createElement("tr");
        if (i == 0) {
            for (var j = 0; j <= files; j ++) {
                var cella = document.createElement("td");
                if (j !== 0) {
                    var text = document.createTextNode(j);
                    cella.appendChild(text);
                }
                columna.appendChild(cella);
            }
        } else {
            for (var j = 0; j <= columnes; j ++) {
                if (j == 0) {
                    var cella = document.createElement("td");
                    var text = document.createTextNode(i);
                    cella.appendChild(text);
                    columna.appendChild(cella);
                } else {
                    var cella = document.createElement("td");
                    var text = document.createTextNode(i * j);
                    cella.appendChild(text);
                    columna.appendChild(cella);
                }
            }
        }
        
        table.appendChild(columna);
    }
    div.appendChild(table);
} else {
    console.log("[Error] Taula no existeix.");
}
