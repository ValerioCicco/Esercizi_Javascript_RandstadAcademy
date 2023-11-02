//Scrivi una funzione che calcoli la somma di tutti gli elementi di un array di numeri e di questo array trova il numero più grande.

function sommaArrayDiNumeri(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

const array = [1, 2, 3, 4, 5];
console.log("La somma dei numeri è: " + sommaArrayDiNumeri(array));

const numeroPiuAlto = Math.max(...array); // Usa spread operator (...) per passare gli elementi dell'array a Math.max
console.log("Il numero più alto è: " +numeroPiuAlto);