function main() {
    var obj = new Object();
    obj.nom = "bookingBMoll";
    obj.eslogan = "Els pitjors hotels al preu mes car.";
    obj.correu = "bookingBMoll@cifpfbmoll.eu";
    obj.any_creacio = 2019;
    obj.color_corporatiu = "F5F5DC";

    var propietari = new Object();
    propietari.nom = "Douglas Crockford";
    propietari.any_neixament = 1955;
    propietari.lloc_neixament = "Minnesota";

    obj.propietari = propietari;

    var hotels = new Array();
    var hotelBorja = new Object();
    hotelBorja.nom = "Borja";
    hotelBorja.any_creacio = 1929;
    hotelBorja.categoria_estrelles = 2;
    hotelBorja.valoracioTrip = 2.5;
    hotelBorja.valoracioBook = 1.8;
    hotelBorja.permet_cans = true;
    
    var habBorja = new Array();
    var habH = new Object();
    habH.nom = "hivern";
    habH.llits = ["individual"];
    habH.dutxa = true;
    habH.banyera = false;
    habH.wc = true;

    var preuH = new Object();
    preuH.valor = 20;
    preuH.moneda = "€";

    habH.preu = preuH;

    var habP = new Object();
    habP.nom = "primavera";
    habP.llits = ["doble", "individual"];
    habP.dutxa = true;
    habP.banyera = true;
    habP.wc = true;

    var preuP = new Object();
    preuP.valor = 30;
    preuP.moneda = "€";

    habP.preu = preuP;

    var habE = new Object();
    habE.nom = "estiu";
    habE.llits = ["individual", "individual"];
    habE.dutxa = true;
    habE.banyera = false;
    habE.wc = true;

    var preuE = new Object();
    preuE.valor = 40;
    preuE.moneda = "€";

    habE.preu = preuE;

    habBorja.push(habH);
    habBorja.push(habP);
    habBorja.push(habE);

    hotelBorja.habitacions = habBorja;

    var berenarBorja = new Object();
    var preuBerBorja = new Object();
    preuBerBorja.valor = 17;
    preuBerBorja.moneda = "€";
    berenarBorja.preu = preuBerBorja;
    hotelBorja.berenar = berenarBorja;

    hotelBorja.serveis = ["gimnas", "spa", "lloguer bicicletes/patinets electrics", "WiFi gratuit"];
    hotelBorja.llenguatges = ["catala", "castella", "angles", "xines", "italia"];

    var hotelMoll = new Object();
    hotelMoll.nom = "Moll";
    hotelMoll.any_creacio = 1917;
    hotelMoll.categoria_estrelles = 3;
    hotelMoll.valoracioTrip = 1;
    hotelMoll.valoracioBook = 1.3;
    hotelMoll.permet_cans = false;
    
    var habMoll = new Array();
    var habD = new Object();
    habD.nom = "Dipsy";
    habD.llits = ["individual"];
    habD.dutxa = true;
    habD.banyera = false;
    habD.wc = false;

    var preuD = new Object();
    preuD.valor = 40;
    preuD.moneda = "€";

    habD.preu = preuD;

    var habL = new Object();
    habL.nom = "La-La";
    habL.llits = ["individual", "individual"];
    habL.dutxa = true;
    habL.banyera = true;
    habL.wc = true;

    var preuL = new Object();
    preuL.valor = 50;
    preuL.moneda = "€";

    habL.preu = preuL;

    var habPo = new Object();
    habPo.nom = "Po";
    habPo.llits = ["doble"];
    habPo.dutxa = true;
    habPo.banyera = false;
    habPo.wc = true;

    var preuPo = new Object();
    preuPo.valor = 80;
    preuPo.moneda = "€";

    habPo.preu = preuPo;

    habMoll.push(habD);
    habMoll.push(habL);
    habMoll.push(habPo);

    hotelMoll.habitacions = habMoll;

    var berenarMoll = new Object();
    var preuBerMoll = new Object();
    preuBerMoll.valor = 27;
    preuBerMoll.moneda = "$";
    berenarMoll.preu = preuBerMoll;
    hotelMoll.berenar = berenarMoll;

    hotelMoll.serveis = ["WiFi gratuit"];
    hotelMoll.llenguatges = ["llati", "espartano", "hindi", "rus", "persa"];

    hotels.push(hotelBorja);
    hotels.push(hotelMoll);

    obj.hotels = hotels;

    document.write(JSON.stringify(obj));
}
