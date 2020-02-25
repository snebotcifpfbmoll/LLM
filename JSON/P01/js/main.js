function crearJSON() {
    var arrayProfessors = new Array();

    var professor = new Object();
    professor.nomComplet = "Alvaro Clemente";
    professor.any_neixament = "1960";
    professor.anys_experiencia = "35";

    arrayProfessors.push(professor);

    professor = new Object();
    professor.nomComplet = "Dani El Malo";
    professor.any_neixament = "1969";
    professor.anys_experiencia = "20";

    arrayProfessors.push(professor);

    var arrayAlumnes = new Array();

    var alumne = new Object();
    alumne.nomComplet = "Freddie Mercury";
    alumne.anyNaixement = "1946";
    alumne.notaex = "9";
    alumne.notaPractica = "perfecte";
    alumne.descripcio = "Si practica pot cantar bé";

    arrayAlumnes.push(alumne);

    alumne = new Object();
    alumne.nomComplet = "John Lennon";
    alumne.anyNaixement = "1940";
    alumne.notaex = "9";
    alumne.notaPractica = "perfecte";
    alumne.descripcio = "Té bastanta imaginació";

    arrayAlumnes.push(alumne);

    alumne = new Object();
    alumne.nomComplet = "Mark Knopfler";
    alumne.anyNaixement = "1949";
    alumne.notaex = "8";
    alumne.notaPractica = "notable";
    alumne.descripcio = "Comença a tocar la guitarra";

    arrayAlumnes.push(alumne);

    var classe = new Object();
    classe.tipus = "musica";
    classe.professors = arrayProfessors;
    classe.alumnes = arrayAlumnes;

    var superclasse = new Object();
    superclasse.classe = classe;

    var json = JSON.stringify(superclasse);

    carregarJSON(json);
}

function carregarJSON(json) {
    const objJson = JSON.parse(json);

    // Obtenir element div (contenidor)
    contenidor = document.getElementById("contenidor");

    // Mostrar el json
    jsonElement = document.createElement("p");
    jsonElement.setAttribute("id", "json");
    jsonElement.innerText = json;

    // L'element assignatura que sera el titol
    assignatura = document.createElement("h1");
    assignatura.setAttribute("id", "nom_classe");
    assignatura.innerText = objJson.classe.tipus;

    // Professors
    professors = document.createElement("div");
    professors.setAttribute("id", "professors");

    profe_titol = document.createElement("h2");
    profe_titol.setAttribute("id", "profe_titol");
    profe_titol.innerText = "Professor";
    professors.appendChild(profe_titol);

    for (profe of objJson.classe.professors) {
        profeElement = document.createElement("p");
        profeElement.setAttribute("id", "profe_nom");
        profeElement.innerText += "Nom: " + profe.nomComplet;
        professors.appendChild(profeElement);
    }

    // L'element alumnes contindra tots els alumnes dins de la classe
    alumnes = document.createElement("div");
    alumnes.setAttribute("id", "alumnes");
    alumnes_titol = document.createElement("h2");
    alumnes_titol.setAttribute("id", "alumnes_titol");
    alumnes_titol.innerText += "Alumnes";
    alumnes.appendChild(alumnes_titol);

    // Afegim tots els alumnes
    for (alumne of objJson.classe.alumnes) {
        alumneElement = document.createElement("p");
        alumneElement.innerHTML += "Nom: " + alumne.nom + "</br>";
        alumneElement.innerHTML += "Any neixament: " + alumne.any_neixament + "</br>";
        alumneElement.innerHTML += "Nota examen: " + alumne.nota_examen + "</br>";
        alumneElement.innerHTML += "Nota practica: " + alumne.nota_practica + "</br>";
        alumneElement.innerHTML += "Descripcio: " + alumne.descripcio + "</br>";
        alumnes.appendChild(alumneElement);
    }

    // Afegim tots els elements al document
    contenidor.appendChild(jsonElement);
    contenidor.appendChild(assignatura);
    contenidor.appendChild(professors);
    contenidor.appendChild(alumnes);
}
