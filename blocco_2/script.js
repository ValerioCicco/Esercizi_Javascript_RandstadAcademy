//Crea una calcolatrice che esegua operazioni di base come addizione, sottrazione, moltiplicazione e divisione.

const numero1 = parseFloat(prompt('Inserisci il primo numero:'));
const numero2 = parseFloat(prompt('Inserisci il secondo numero:'));

const operazione = prompt('Scegli un\'operazione: addizione (+), sottrazione (-), moltiplicazione (*) o divisione (/)');

let risultato;

switch (operazione) {
    case '+':
        risultato = numero1 + numero2;
        break;
    case '-':
        risultato = numero1 - numero2;
        break;
    case '*':
        risultato = numero1 * numero2;
        break;
    case '/':
        if (numero2 !== 0) {
            risultato = numero1 / numero2;
        } else {
            alert('Impossibile dividere per zero.');
        }
        break;
    default:
        alert('Operazione non valida.');
}

if (risultato !== undefined) {
    alert(`Il risultato di ${numero1} ${operazione} ${numero2} è: ${risultato}`);
}