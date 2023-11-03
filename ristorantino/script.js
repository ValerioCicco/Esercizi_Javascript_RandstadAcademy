//codice sconto
const discountCode = "SERVLET20";

alert("benvenuto, questo è il codice sconto: " + discountCode);

//NOME BURGER DA PROMPT
var burgerName = prompt("Inserisci il nome del burger");

var risultatoPrezzo = 4.5;
//per stampare il nome del burger in HTML
if(burgerName == "") {
    document.getElementById("hamburger-name").textContent = "The Valerio Burger";
    risultatoPrezzo = 5.0;
} else if(burgerName === "Simone") {
    document.getElementById("hamburger-name").textContent = "The " + burgerName + " Burger";
    risultatoPrezzo = 6.99;
} else {
    document.getElementById("hamburger-name").textContent = "The " + burgerName + " Burger";
    risultatoPrezzo = 4.5;
}


//ref per calcolo
var bottoneCalcolo = document.getElementById("calcoloTotale");

//prezzo burger
var prezzoBurger = document.getElementById("price");

//prendere input codice sconto
var input = document.getElementById("discount");

//ingredienti
var ingrediente1 = document.getElementById("ingr-1");
var ingrediente2 = document.getElementById("ingr-2");
var ingrediente3 = document.getElementById("ingr-3");
var ingrediente4 = document.getElementById("ingr-4");
var ingrediente5 = document.getElementById("ingr-5");
var ingrediente6 = document.getElementById("ingr-6");

//LISTENER BOTTONE
bottoneCalcolo.addEventListener("click",  function() {

    let arrayIngr = [ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5, ingrediente6];

    for(var i = 0; i < arrayIngr.length; i++) {
        if(arrayIngr[i].checked) {
            risultatoPrezzo += parseFloat(arrayIngr[i].value);
        }
    }

    if(input.value === discountCode) {
        //Appicare sconto del 10%
        risultatoPrezzo *= 0.9;
    }

    document.getElementById("price").innerHTML = risultatoPrezzo + " €";
})