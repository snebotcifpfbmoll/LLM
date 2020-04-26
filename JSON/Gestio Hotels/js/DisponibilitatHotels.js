// Variables globals
var hotels = null;

// descarregar json
function loadJSON(callback) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", "https://raw.githubusercontent.com/snebotcifpfbmoll/LLM/master/JSON/Gestio%20Hotels/data/hotels.json");
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

// funcio d'inici
function init() {
    loadJSON(function (response) {
        hotels = JSON.parse(response);
        console.log(hotels);
    });
}

// comprovar els filtres
// retorna un objecte amb tots els filtres o null en cas d'error
function comprovarFiltres() {
    let filtres = new Object();
    filtres.error = "";
    filtres.temporada = document.getElementById("cercaTemporada").value;
    filtres.estrelles = document.getElementById("cercaEstrelles").value;
    if (filtres.estrelles < 1 || filtres.estrelles > 5) {
        document.getElementById("lblCercaEstrelles").style.color = "red";
        document.getElementById("cercaEstrelles").style.color = "red";
        filtres.error = "Numero d'estrelles incorrecte.\n";
    } else {
        document.getElementById("lblCercaEstrelles").style.color = "#383838";
        document.getElementById("cercaEstrelles").style.color = "#383838";
    }

    // en cas de que el numero d'habitacions sigui igual a 0 es sercara per qualsevol numero
    filtres.habInd = document.getElementById("cercaHabitacionsIndividuals").value;
    if (filtres.habInd < 0) {
        document.getElementById("cercaHabitacionsIndividuals").style.color = "red";
        document.getElementById("lblCercaHabitacionIndividuals").style.color = "red";
        filtres.error = "Numero d'habitacions incorrecte.\n";
    } else {
        document.getElementById("cercaHabitacionsIndividuals").style.color = "#383838";
        document.getElementById("lblCercaHabitacionIndividuals").style.color = "#383838";
    }

    filtres.habDobles = document.getElementById("cercaHabitacionsDobles").value;
    if (filtres.habDobles < 0) {
        document.getElementById("lblCercaHabitacionDobles").style.color = "red";
        document.getElementById("cercaHabitacionsDobles").style.color = "red";
        filtres.error = "Numero d'habitacions incorrecte.\n";
    } else {
        document.getElementById("lblCercaHabitacionDobles").style.color = "#383838";
        document.getElementById("cercaHabitacionsDobles").style.color = "#383838";
    }

    filtres.wifi = document.getElementById("cercaWifi").checked;
    filtres.neteja = document.getElementById("cercaNeteja").checked;
    filtres.mascotes = document.getElementById("cercaMascotes").checked;
    filtres.berenar = document.getElementById("cercaBerenar").checked;
    filtres.sopar = document.getElementById("cercaDinar").checked;
    filtres.dinar = document.getElementById("cercaSopar").checked;


    return filtres;
}

// sercar el numero de llits d'un especific tipo a una habitacio
function numeroLlits(llits, tipo) {
    var n = 0;
    for (var i = 0; i < llits.length; i++) {
        let llit = llits[i];
        if (llit == tipo) n++;
    }
    return n;
}

// filtrar per agregador (preu mes baix)
function getPreuBaix(agregadors, temporada) {
    let tmp_preu = 0;
    for (var i = 0; i < agregadors.length; i++) {
        let agregador = agregadors[i];
        for (var j = 0; j < agregador.tarifes.length; j++) {
            let tarifa = agregador.tarifes[j];
            if (tarifa.tarifa != temporada) continue;
            let preu = tarifa.preu.preu_net + tarifa.preu.preu_net * (tarifa.preu.impostos / 100);
            if (tmp_preu > preu || tmp_preu == 0) tmp_preu = preu;
        }
    }

    return tmp_preu;
}

// sercar hotels que compleixin amb els filtres
function cerca() {
    let filtres = comprovarFiltres();
    if (filtres.error != "") {
        console.log(filtres.error);
        return;
    }

    // guardarem el resultat dels hotels i habitacions dins un array d'objectes
    let tmp_hotels = new Array();
    for (var i = 0; i < hotels.length; i++) {
        let hotel = hotels[i];
        if (hotel.estrelles < filtres.estrelles) continue;
        if (filtres.wifi && !hotel.wifi) continue;
        if (filtres.neteja && !hotel.serveiNeteja) continue;
        if (filtres.mascotes && !hotel.permetMascotes) continue;
        if (filtres.berenar && hotel.berenar == null) continue;
        if (filtres.dinar && hotel.dinar == null) continue;
        if (filtres.sopar && hotel.sopar == null) continue;

        let tmp_hotel = new Object();
        tmp_hotel.id = hotel.id;
        tmp_hotel.titol = hotel.nom;
        tmp_hotel.estrelles = hotel.estrelles;
        tmp_hotel.habitacions = new Array();

        // filtrar per habitacio
        for (var j = 0; j < hotel.habitacions.length; j++) {
            let habitacio = hotel.habitacions[j];
            let ind = numeroLlits(habitacio.llits, "individual");
            let dob = numeroLlits(habitacio.llits, "doble");
            if (filtres.habInd > ind) continue;
            if (filtres.habDobles > dob) continue;

            let temporada = filtres.temporada == "Alta" ? "estiu" : "hivern";
            let preuHab = getPreuBaix(habitacio.agregadors, temporada);

            // cream un nou objecte per a poder posar nomes un preu
            let tmp_hab = habitacio;
            tmp_hab.preu = preuHab;
            tmp_hotel.habitacions.push(tmp_hab);
        }

        if (tmp_hotel.habitacions.length > 0) tmp_hotels.push(tmp_hotel);
    }

    console.log(tmp_hotels);
    mostrarHabitacions(tmp_hotels);
}

function getHotel(id) {
    for (var i = 0; i < hotels.length; i++) {
        let hotel = hotels[i];
        if (hotel.id == id) return hotel;
    }
}

function getHab(hotel, id) {
    for (var i = 0; i < hotel.habitacions.length; i++) {
        let hab = hotel.habitacions[i];
        if (hab.id == id) return hab;
    }
}

function mostrarHabitacions(infoHotels) {
    let container = document.getElementsByClassName("resultatHabitacions")[0];
    container.innerHTML = "";

    for (var i = 0; i < infoHotels.length; i++) {
        let hotel = infoHotels[i];

        for (var j = 0; j < hotel.habitacions.length; j++) {
            let habitacio = hotel.habitacions[j];

            let resHab = document.createElement("div");
            resHab.classList.add("resultatHabitacio");
        
            let infoHab = document.createElement("div");
            infoHab.classList.add("infoHab");
        
            let titolHotel = document.createElement("h2");
            titolHotel.setAttribute("id", "titolHotel");
            titolHotel.innerText = hotel.titol;
        
            let estrellesHotel = document.createElement("small");
            estrellesHotel.setAttribute("id", "estrellesHotel");
            estrellesHotel.innerText = hotel.estrelles + " estrelles";
        
            let desc = document.createElement("p");
            desc.setAttribute("id", "descripcioHab");
            desc.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum convallis nisl, ut cursus dui congue a. Aliquam aliquet dolor quis suscipit eleifend. Etiam et vehicula ipsum. Nulla facilisi. Vivamus aliquam condimentum magna, lacinia gravida orci tincidunt eget. Duis at ultrices est. Praesent aliquam, turpis vitae vestibulum dignissim, eros justo tempus felis, in interdum quam risus sed quam. In sit amet sodales neque. Cras leo velit, feugiat vehicula leo id, molestie molestie magna.";
        
            infoHab.appendChild(titolHotel);
            infoHab.appendChild(estrellesHotel);
            infoHab.appendChild(desc);
        
            let selecHab = document.createElement("div");
            selecHab.classList.add("seleccionarHab");
        
            let preu = document.createElement("p");
            preu.innerText = habitacio.preu + "€";
        
            let lblSelecQ = document.createElement("label");
            lblSelecQ.setAttribute("for", "seleccionarQuantitat");
            lblSelecQ.innerText = "Quantitat: ";
        
            let selecQ = document.createElement("input");
            selecQ.setAttribute("type", "number");
            selecQ.setAttribute("id", "seleccionarQuantitat");
            selecQ.setAttribute("value", "0");
            selecQ.setAttribute("min", "0");

            let btn = document.createElement("button");
            btn.setAttribute("type", "button");
            btn.innerText = "Seleccionar";
        
            selecHab.appendChild(preu);
            selecHab.appendChild(lblSelecQ);
            selecHab.appendChild(selecQ);
            selecHab.appendChild(btn);
        
            resHab.appendChild(infoHab);
            resHab.appendChild(selecHab);
        
            container.appendChild(resHab);
        }
    }
}
