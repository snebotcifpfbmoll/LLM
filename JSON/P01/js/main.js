function carregarJSON() {
    const json = '{"classe":{"@assignatura":"musica","professor":{"nom":"Alvaro Clemente","any_neixament":"1960","anys_experiencia":"35"},"alumnes":[{"alumne":{"@nom":"Freddie Mercury","any_neixament":"1946","nota_examen":"9","nota_practica":"Perfecte","descripcio":"Si practica pot cantar b\u00e9"}},{"alumne":{"@nom":"John Lennon","any_neixament":"1940","nota_examen":"8","nota_practica":"Notable","descripcio":"T\u00e9 bastanta imaginaci\u00f3"}},{"alumne":{"@nom":"Mark Knopfler","any_neixament":"1949","nota_examen":"9","nota_practica":"Notable","descripcio":"Comen\u00e7a a tocar la guitarra"}},{"alumne":{"@nom":"Justin Bieber","any_neixament":"1994","nota_examen":"0","nota_practica":"Insuficient","descripcio":"Sense comentaris"}},{"alumne":{"@nom":"Lemmy Kilmister","any_neixament":"1945","nota_examen":"3","nota_practica":"Notable","descripcio":"Jove molt sa."}}]}}';
    const objJson = JSON.parse(json);

    contenidor = document.getElementById("contenidor");
    assignatura = document.createElement("h1");
    assignatura.setAttribute("id", "nom_classe");
    assignatura.innerText = objJson.classe["@assignatura"];
    profe = document.createElement("p");
    profe.innerHTML = "<h2>Professor</h2>";
    profe.innerHTML += "Nom: " + objJson.classe.professor.nom + "</br>";
    alumnes = document.createElement("div");
    alumnes.innerHTML += "<h2>Alumnes</h2>";

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

    contenidor.appendChild(assignatura);
    contenidor.appendChild(profe);
    contenidor.appendChild(alumnes);
}
