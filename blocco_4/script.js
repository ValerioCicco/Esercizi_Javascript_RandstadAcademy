// Creare un array composto da 10 automobili
// ogni OGGETTO automobile avrà le seguenti proprietà
// Marca Modello Alimentazione (benzina, diesel, elettrico)
// Dividi le automobili in 3 array separati Stampare separatamente i 3 array
// SE VOLESSIMO UTILIZZARE IL METODO ".fiter"
const automobili = [
    {
        Marca: "Toyota",
        Modello: "Corolla",
        Alimentazione: "Benzina"
    },
    {
        Marca: "Ford",
        Modello: "Focus",
        Alimentazione: "Diesel"
    },
    {
        Marca: "Tesla",
        Modello: "Model 3",
        Alimentazione: "Elettrico"
    },
    {
        Marca: "Volkswagen",
        Modello: "Golf",
        Alimentazione: "Benzina"
    },
    {
        Marca: "BMW",
        Modello: "X5",
        Alimentazione: "Diesel"
    },
    {
        Marca: "Nissan",
        Modello: "Leaf",
        Alimentazione: "Elettrico"
    },
    {
        Marca: "Honda",
        Modello: "Civic",
        Alimentazione: "Benzina"
    },
    {
        Marca: "Audi",
        Modello: "A4",
        Alimentazione: "Diesel"
    },
    {
        Marca: "Chevrolet",
        Modello: "Bolt",
        Alimentazione: "Elettrico"
    },
    {
        Marca: "Hyundai",
        Modello: "Elantra",
        Alimentazione: "Benzina"
    }
];

let autoBenzina = automobili.filter(singolaAuto => singolaAuto.Alimentazione == "Benzina")
console.log(autoBenzina);
let autoDiesel = automobili.filter(singolaAuto => singolaAuto.Alimentazione == "Diesel")
console.log(autoDiesel);
let autoElettriche = automobili.filter(singolaAuto => singolaAuto.Alimentazione == "Elettrico")
console.log(autoElettriche);

// SE VOLESSIMO UTILIZZARE IL METODO ".push"
var benzina = [];
var diesel = [];
var elettrico = [];

for(const automobile of automobili) {
    if(automobile.Alimentazione === "Benzina") {
        benzina.push(automobile);
    } else if (automobile.Alimentazione === "Diesel") {
        diesel.push(automobile);
    } else {
        elettrico.push(automobile);
    }
}

console.log(benzina);
console.log(diesel);
console.log(elettrico);