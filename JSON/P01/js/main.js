function carregarJSON() {
    const json = '{"classe":{"@assignatura":"musica","professor":{"nom":"Alvaro Clemente","any_neixament":"1960","anys_experiencia":"35"},"alumnes":[{"alumne":{"@nom":"Freddie Mercury","any_neixament":"1946","nota_examen":"9","nota_practica":"Perfecte","descripcio":"Si practica pot cantar b\u00e9"}},{"alumne":{"@nom":"John Lennon","any_neixament":"1940","nota_examen":"8","nota_practica":"Notable","descripcio":"T\u00e9 bastanta imaginaci\u00f3"}},{"alumne":{"@nom":"Mark Knopfler","any_neixament":"1949","nota_examen":"9","nota_practica":"Notable","descripcio":"Comen\u00e7a a tocar la guitarra"}},{"alumne":{"@nom":"Justin Bieber","any_neixament":"1994","nota_examen":"0","nota_practica":"Insuficient","descripcio":"Sense comentaris"}},{"alumne":{"@nom":"Lemmy Kilmister","any_neixament":"1945","nota_examen":"3","nota_practica":"Notable","descripcio":"Jove molt sa."}}]}}';
    const objJson = JSON.parse(json);

    // Obtenir element div (contenidor)
    contenidor = document.getElementById("contenidor");

    // L'element assignatura que sera el titol
    assignatura = document.createElement("h1");
    assignatura.setAttribute("id", "nom_classe");
    assignatura.innerText = objJson.classe["@assignatura"];

    // Element profe
    profe = document.createElement("div");
    //profe.setAttribute("id", "profe");

    profe_titol = document.createElement("h2");
    //profe_titol.setAttibute("id", "profe_titol");
    profe_titol.innerText = "Professor";

    profe_nom = document.createElement("p");
    //profe_nom.setAttibute("id", "profe_nom");
    profe_nom.innerText += "Nom: " + objJson.classe.professor.nom;

    profe.appendChild(profe_titol);
    profe.appendChild(profe_nom);

    // L'element alumnes contindra tots els alumnes dins de la classe
    alumnes = document.createElement("div");
    //alumnes.setAttribute("id", "alumnes");
    alumnes_titol = document.createElement("h2");
    //alumnes_titol.setAttribute("id", "alumnes_titol");
    alumnes_titol.innerText += "Alumnes";
    alumnes.appendChild(alumnes_titol);

    // Afegim tots els alumnes
    for (var i = 0; i < objJson.classe.alumnes.length; i ++) {
        objAlumne = objJson.classe.alumnes[i];
        alumne = document.createElement("p");
        alumne.innerHTML += "Nom: " + objAlumne.alumne["@nom"] + "</br>";
        alumne.innerHTML += "Any neixament: " + objAlumne.alumne.any_neixament + "</br>";
        alumne.innerHTML += "Nota examen: " + objAlumne.alumne.nota_examen + "</br>";
        alumne.innerHTML += "Nota practica: " + objAlumne.alumne.nota_practica + "</br>";
        alumne.innerHTML += "Descripcio: " + objAlumne.alumne.descripcio + "</br>";
        alumnes.appendChild(alumne);
    }

    // Afegim tots els elements al document
    contenidor.appendChild(assignatura);
    contenidor.appendChild(profe);
    contenidor.appendChild(alumnes);
}
