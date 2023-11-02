// A partire da un array di stringhe,
//crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
//Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

const array = ["ValeRio", "SimOnE", "LucA"];

const arrayFormattato = array.map(stringa => {
    const stringaFormattata = stringa.charAt(0).toUpperCase() + stringa.slice(1).toLowerCase();
    return stringaFormattata;
});

console.log(arrayFormattato);