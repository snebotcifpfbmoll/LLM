function comprobarNull(arr) {
    var es_null = false;
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i].value) {
            arr[i].classList.add("incorrecte");
            es_null = true;
        } else {
            arr[i].classList.remove("incorrecte");
        }
    }
    return es_null
}

function enviar() {
    var arr = []
    var nom = document.getElementById("nom");
    arr.push(nom);
    var cognoms = document.getElementById("cognoms");
    arr.push(cognoms);
    var email = document.getElementById("email");
    var id_usuari = document.getElementById("id_usuari");
    arr.push(id_usuari);
    var contrasenya = document.getElementById("contrasenya");
    var conf_contrasenya = document.getElementById("conf_contrasenya");

    if (comprobarNull(arr)) {
        var email_tmp = email.value.split("@");
        if (!email_tmp[0] || !email_tmp[1]) {
            email.classList.add("incorrecte");
        } else {
            email.classList.remove("incorrecte");
        }
        if ((contrasenya.value && conf_contrasenya.value) && (contrasenya.value == conf_contrasenya.value)) {
            contrasenya.classList.remove("incorrecte");
            conf_contrasenya.classList.remove("incorrecte");
        } else {
            contrasenya.classList.add("incorrecte");
            conf_contrasenya.classList.add("incorrecte");
        }
    }
}
