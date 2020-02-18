function Persona(nom, edat, genere) {
    this.nom = nom;
    this.edat = edat;
    this.genere = genere;
}
Persona.prototype.obtDetalles = function() {
    console.log("Nom: " + this.nom);
    console.log("Edat: " + this.edat);
    console.log("Genere: " + this.genere);
};

function Estudiant(nom, edat, genere, curs, grup) {
    Persona.call(this, nom, edat, genere);
    this.curs = curs;
    this.grup = grup;
}
Estudiant.prototype.registrar = function() {
    console.log("L'estudiant " + this.nom + " ha estat registrat.");
};

function Profesor(nom, edat, genere, asignatura, nivell) {
    Persona.call(this, nom, edat, genere);
    this.asignatura = asignatura;
    this.nivell = nivell;
}
Profesor.prototype.asignar = function() {
    console.log("El professor " + this.nom + " ha estat assignat.");
};

var persona = new Persona("Serafi", 18, "home");
var estudiant = new Estudiant("Tomeu", 19, "home", "DAM1", "DAM");
var professor = new Profesor("Miquel", 27, "home", "LLM", 9);
persona.obtDetalles();
estudiant.registrar();
professor.asignar();
