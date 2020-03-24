var comptadorHotels = 0;

function comprovarDades() {
    let error = "";

    if (document.getElementById("hotelNom").value == "") {
        error += "Camp nom esta buit.\n";
    }

    // volem el valor d'estrelles com a numero per a poder comprovar que esta en el rang 1-5
    // parseInt() converteix un string a int. si no ho pot fer retorna NaN
    let estrelles = parseInt(document.getElementById("hotelEstrelles").value);
    if (!isNaN(estrelles)) {
        // el valor nomes pot ser entre 1 a 5
        if (estrelles < 1 || estrelles > 5) {
            error += "El numero d'estrelles ha de ser entre 1 i 5.\n";
        }
    } else {
        error += "El camp estrelles ha de ser un numero.\n";
    }

    return error;
}

function generarJsonHotels() {
    let hotels = new Array();
    let llistaHotels = document.getElementsByClassName("jsonHotel");

    if (llistaHotels == null) return "";

    for (i = 0; i < llistaHotels.length; i ++) {
        hotelJson = llistaHotels.item(i);

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
    hotel.estrelles = document.getElementById("hotelEstrelles").value;
    return hotel;
}

function afegirHotel() {
    let errDades = comprovarDades();

    if (errDades != "") {
        alert(errDades);
        return;
    }

    let idHotel = comptadorHotels++;
    let hotel = crearHotel(idHotel);
    let htmlHotel = '<li id="llistaHotel' + idHotel + '">';
    htmlHotel += '<label id="nomHotel' + idHotel + '">' + hotel.nom + '</label>';
    htmlHotel += '<input type="hidden" class="jsonHotel' + idHotel + '" value=""/>';
    htmlHotel += '<button onclick="eliminarHotel(' + idHotel + ')">Eliminar</button>';
    htmlHotel += '<button onclick="modificarHotel(' + idHotel + ')">Modificar</button>';
    htmlHotel += '</li>';

    console.log(htmlHotel);

    document.getElementById("llistaHotels").innerHtml += htmlHotel;
    document.getElementById("jsonHotel" + idHotel).value = JSON.stringify(hotel);
}

function modificarHotel() {
}

function mostrarJson() {
}
