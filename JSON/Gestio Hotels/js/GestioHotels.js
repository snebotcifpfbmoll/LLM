var comptadorHotels = 0;

function comprovarMenjada(menjada) {
    var error = "";
    if (document.getElementById("hotel" + menjada).checked && !document.getElementById("hotelCarta" + menjada).checked) {
        let preu = parseInt(document.getElementById("hotelPreuNet" + menjada).value);
        if (!isNaN(preu)) {
            if (preu >= 0) {
                document.getElementById("lblHotelPreuNet" + menjada).style.color = "black";
            } else {
                document.getElementById("lblHotelPreuNet" + menjada).style.color = "red";
            }
        } else {
            error += "El camp preu ha de ser un numero.\n";
            document.getElementById("lblHotelPreuNet" + menjada).style.color = "red";
        }

        let impost = parseInt(document.getElementById("hotelImpost" + menjada).value);
        if (!isNaN(impost)) {
            if (impost >= 0) {
                document.getElementById("lblHotelImpost" + menjada).style.color = "black";
            } else {
                document.getElementById("lblHotelImpost" + menjada).style.color = "red";
            }
        } else {
            error += "El camp impost ha de ser un numero.\n";
            document.getElementById("lblHotelImpost" + menjada).style.color = "red";
        }
    }

    return error;
}

function comprovarDades() {
    let error = "";

    if (document.getElementById("hotelNom").value == "") {
        error += "Camp nom esta buit.\n";
        document.getElementById("lblHotelNom").style.color = "red";
    } else {
        document.getElementById("lblHotelNom").style.color = "black";
    }

    let estrelles = parseInt(document.getElementById("hotelEstrelles").value);
    if (!isNaN(estrelles)) {
        // el valor nomes pot ser entre 1 a 5
        if (estrelles < 1 || estrelles > 5) {
            error += "El numero d'estrelles ha de ser entre 1 i 5.\n";
            document.getElementById("lblHotelEstrelles").style.color = "red";
        } else {
            document.getElementById("lblHotelEstrelles").style.color = "black";
        }
    } else {
        error += "El camp estrelles ha de ser un numero.\n";
        document.getElementById("lblHotelEstrelles").style.color = "red";
    }

    if (document.getElementById("hotelLocalitzacio").value == "") {
        error += "Camp localitzacio esta buit.\n";
        document.getElementById("lblHotelLocalitzacio").style.color = "red";
    } else {
        document.getElementById("lblHotelLocalitzacio").style.color = "black";
    }

    if (document.getElementById("hotelMenjars").checked) {
        error += comprovarMenjada("Berenar");
        error += comprovarMenjada("Dinar");
        error += comprovarMenjada("Sopar");
    }

    return error;
}

function netejarCamps() {
    document.getElementById("hotelId").value = "";
    document.getElementById("hotelNom").value = "";
    document.getElementById("hotelEstrelles").value = "";
    document.getElementById("hotelLocalitzacio").value = "";
    document.getElementById("hotelPermetMascotes").checked = false;;
    document.getElementById("hotelServeiNeteja").checked = false;
    document.getElementById("hotelWifi").checked = false;
    document.getElementById("hotelMenjars").checked = false;

    // berenar
    document.getElementById("hotelBerenar").checked = false;
    document.getElementById("hotelCartaBerenar").checked = false;
    document.getElementById("hotelPreuNetBerenar").value = "";
    document.getElementById("hotelImpostBerenar").value = "";
    document.getElementById("hotelPreuTotalBerenar").value = "";
    document.getElementById("hotelMonedaBerenar").value = "euro";

    // dinar
    document.getElementById("hotelDinar").checked = false;
    document.getElementById("hotelCartaDinar").checked = false;
    document.getElementById("hotelPreuNetDinar").value = "";
    document.getElementById("hotelImpostDinar").value = "";
    document.getElementById("hotelPreuTotalDinar").value = "";
    document.getElementById("hotelMonedaDinar").value = "euro";

    // sopar
    document.getElementById("hotelSopar").checked = false;
    document.getElementById("hotelCartaSopar").checked = false;
    document.getElementById("hotelPreuNetSopar").value = "";
    document.getElementById("hotelImpostSopar").value = "";
    document.getElementById("hotelPreuTotalSopar").value = "";
    document.getElementById("hotelMonedaSopar").value = "euro";

    document.getElementById("hotelDadesMenjars").style.display = "none";
}

function generarJsonHotels() {
    let hotels = new Array();
    let llistaHotels = document.getElementsByClassName("jsonHotel");
    for (var i = 0; i < llistaHotels.length; i ++) {
        hotelJson = llistaHotels.item(i).value;
        let hotel = new Object();
        hotel = JSON.parse(hotelJson);
        hotel.id = i;

        hotels.push(hotel);
    }

    return JSON.stringify(hotels);
}

function crearHotel(id) {
    let hotel = new Object();
    hotel.id = id;
    hotel.nom = document.getElementById("hotelNom").value;
    hotel.estrelles = parseInt(document.getElementById("hotelEstrelles").value);
    hotel.localitzacio = document.getElementById("hotelLocalitzacio").value;
    hotel.permetMascotes = document.getElementById("hotelPermetMascotes").checked;
    hotel.serveiNeteja = document.getElementById("hotelServeiNeteja").checked;
    hotel.wifi = document.getElementById("hotelWifi").checked;
    hotel.menjars = document.getElementById("hotelMenjars").checked;

    // berenar
    let berenar = document.getElementById("hotelBerenar").checked;
    if (berenar) {
        let berenar = new Object();
        berenar.carta = document.getElementById("hotelCartaBerenar").checked;
        berenar.preu = hotel.berenarCarta ? null : parseInt(document.getElementById("hotelPreuNetBerenar").value);
        berenar.imposts = hotel.berenarCarta ? null : parseInt(document.getElementById("hotelImpostBerenar").value);
        berenar.preuTotal = hotel.berenarCarta ? null : parseInt(document.getElementById("hotelPreuTotalBerenar").value);
        berenar.moneda = hotel.berenarCarta ? null : document.getElementById("hotelMonedaBerenar").value;
        hotel.berenar = berenar;
    }

    // dinar
    let dinar = document.getElementById("hotelDinar").checked;
    if (dinar) {
        let dinar = new Object();
        dinar.carta = document.getElementById("hotelCartaDinar").checked;
        dinar.preu = hotel.dinarCarta ? null : parseInt(document.getElementById("hotelPreuNetDinar").value);
        dinar.imposts = hotel.dinarCarta ? null : parseInt(document.getElementById("hotelImpostDinar").value);
        dinar.preuTotal = hotel.dinarCarta ? null : parseInt(document.getElementById("hotelPreuTotalDinar").value);
        dinar.moneda = hotel.dinarCarta ? null : document.getElementById("hotelMonedaDinar").value;
        hotel.dinar = dinar;
    }

    // sopar
    let sopar = document.getElementById("hotelSopar").checked;
    if (sopar) {
        let sopar = new Object();
        sopar.carta = document.getElementById("hotelCartaSopar").checked;
        sopar.preu = hotel.soparCarta ? null : parseInt(document.getElementById("hotelPreuNetSopar").value);
        sopar.imposts = hotel.soparCarta ? null : parseInt(document.getElementById("hotelImpostSopar").value);
        sopar.preuTotal = hotel.soparCarta ? null : parseInt(document.getElementById("hotelPreuTotalSopar").value);
        sopar.moneda = hotel.soparCarta ? null : document.getElementById("hotelMonedaSopar").value;
        hotel.sopar = sopar;
    }

    return hotel;
}

// id_1: id del input per comprovar si esta on o off
// id_2: id de l'element que es vol amagar o mostrar
// estat: l'estat en que es vol id_1 per tal de mostrar id_2
//   |--> (true si es vol mostrar l'element quan id_1 estigui on. false en cas contrari)
function canviarDisplay(id_1, id_2, estat) {
    let checked = document.getElementById(id_1).checked;
    document.getElementById(id_2).style.display = checked == estat ? "inline" : "none";
}

function canviarPreuTotal(menjada) {
    if (comprovarMenjada(menjada) == 0) {
        let preuNet = parseInt(document.getElementById("hotelPreuNet" + menjada).value);
        let impost = parseInt(document.getElementById("hotelImpost" + menjada).value);
        document.getElementById("hotelPreuTotal" + menjada).value = preuNet + preuNet * (impost / 100);
    }
}

/* Funcions dels botons */
function afegirHotel() {
    let errDades = comprovarDades();

    if (errDades != "") {
        // de moment no mostrarem el missatge d'error ja que el color dels camps canvia
        //alert(errDades);
        return;
    }

    let idHotel = comptadorHotels++;
    let hotel = crearHotel(idHotel);
    let htmlHotel = '<li id="llistaHotel' + idHotel + '">';
    htmlHotel += '<label id="nomHotel' + idHotel + '">' + hotel.nom + '</label>';
    htmlHotel += '<input type="hidden" id="jsonHotel' + idHotel + '" class="jsonHotel" value=""/>';
    htmlHotel += '<button onclick="eliminarHotel(' + idHotel + ')">Eliminar</button>';
    htmlHotel += '<button onclick="modificarHotel(' + idHotel + ')">Modificar</button>';
    htmlHotel += '</li>';

    document.getElementById("llistaHotels").innerHTML += htmlHotel;
    document.getElementById("jsonHotel" + idHotel).value = JSON.stringify(hotel);
    netejarCamps();
}

function modificarHotel(id) {
    let hotel = JSON.parse(document.getElementById("jsonHotel" + id).value);
    document.getElementById("hotelId").value = id;
    document.getElementById("hotelNom").value = hotel.nom;
    document.getElementById("hotelEstrelles").value = hotel.estrelles;
    document.getElementById("hotelLocalitzacio").value = hotel.localitzacio;
    document.getElementById("hotelPermetMascotes").checked = hotel.permetMascotes;
    document.getElementById("hotelServeiNeteja").checked = hotel.serveiNeteja;
    document.getElementById("hotelWifi").checked = hotel.wifi;
    document.getElementById("hotelMenjars").checked = hotel.menjars;
    canviarDisplay("hotelMenjars", "hotelDadesMenjars", true);

    // berenar
    if ('berenar' in hotel) {
        document.getElementById("hotelBerenar").checked = true;
        document.getElementById("hotelCartaBerenar").checked = hotel.berenar.carta;
        document.getElementById("hotelPreuNetBerenar").value = hotel.berenar.preu;
        document.getElementById("hotelImpostBerenar").value = hotel.berenar.imposts;
        document.getElementById("hotelPreuTotalBerenar").value = hotel.berenar.preuTotal;
        document.getElementById("hotelMonedaBerenar").value = hotel.berenar.moneda;
    } else {
        document.getElementById("hotelBerenar").checked = false;
    }

    // dinar
    if ('dinar' in hotel) {
        document.getElementById("hotelDinar").checked = true;
        document.getElementById("hotelCartaDinar").checked = hotel.dinar.carta;
        document.getElementById("hotelPreuNetDinar").value = hotel.dinar.preu;
        document.getElementById("hotelImpostDinar").value = hotel.dinar.imposts;
        document.getElementById("hotelPreuTotalDinar").value = hotel.dinar.preuTotal;
        document.getElementById("hotelMonedaDinar").value = hotel.dinar.moneda;
    } else {
        document.getElementById("hotelDinar").checked = false;
    }

    // sopar
    if ('sopar' in hotel) {
        document.getElementById("hotelSopar").checked = true;
        document.getElementById("hotelCartaSopar").checked = hotel.sopar.carta;
        document.getElementById("hotelPreuNetSopar").value = hotel.sopar.preu;
        document.getElementById("hotelImpostSopar").value = hotel.sopar.imposts;
        document.getElementById("hotelPreuTotalSopar").value = hotel.sopar.preuTotal;
        document.getElementById("hotelMonedaSopar").value = hotel.sopar.moneda;
    } else {
        document.getElementById("hotelSopar").checked = false;
    }

    // canviar el boto Afegir per Modificar
    document.getElementById("modificarBtn").style.display = "inline";
    document.getElementById("afegirBtn").style.display = "none";
}

function guardarHotel() {
    let id = document.getElementById("hotelId").value;
    if (comprovarDades() == "") {
        let hotel = crearHotel(id);
        document.getElementById("nomHotel" + id).innerText = hotel.nom;
        document.getElementById("jsonHotel" + id).value = JSON.stringify(hotel);
        document.getElementById("modificarBtn").style.display = "none";
        document.getElementById("afegirBtn").style.display = "inline";
        netejarCamps();
    }
}

function mostrarJson() {
    document.getElementById("textBoxJson").innerText = generarJsonHotels();
}

function eliminarHotel(id) {
    let hotel = document.getElementById("llistaHotel" + id);
    if (!hotel) {
        alert("L'hotel seleccionat no existeix!");
    } else {
        if (confirm("Segur que vols eliminar aquest hotel?")) {
            hotel.parentNode.removeChild(hotel);
        }
    }
}

