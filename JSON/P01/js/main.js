function crearProfessor(nom, any, exp) {
    var professor = new Object();
    professor.nomComplet = nom;
    professor.any_neixament = any;
    professor.anys_experiencia = exp;
    return professor;
}

function crearAlumne(nom, any, notaex, notap, desc) {
    var alumne = new Object();
    alumne.nomComplet = nom;
    alumne.anyNaixement = any;
    alumne.notaex = notaex;
    alumne.notaPractica = notap;
    alumne.descripcio = desc;
    return alumne;
}

function crearClasse(tipus, arrProfessors, arrAlumnes) {
    var classe = new Object();
    classe.tipus = tipus;
    classe.professors = arrProfessors;
    classe.alumnes = arrAlumnes;
    return classe;
}

function crearJSON() {
    var arrayProfessors = new Array();
    arrayProfessors.push(crearProfessor("Alvaro Clemente", "1960", "35"));
    arrayProfessors.push(crearProfessor("Dani El Malo", "1969", "20"));

    var arrayAlumnes = new Array();
    arrayAlumnes.push(crearAlumne("Freddie Mercury", "1946", "9", "perfecte", "Si practica pot cantar bé"));
    arrayAlumnes.push(crearAlumne("John Lennon", "1940", "9", "perfecte", "Te bastanta imaginació"));
    arrayAlumnes.push(crearAlumne("Mark Knopfler", "1949", "8", "notable", "Comença a tocar la guitarra"));

    var classe = crearClasse("musica", arrayProfessors, arrayAlumnes);

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
