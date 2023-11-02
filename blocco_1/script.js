//Scrivi uno script che chieda il nome dell'utente e generi un messaggio di saluto. Prompt + alert

const nomeUtente = prompt('Inserisci il tuo nome:');

// Controllo sul nome, in caso non inserisco, salutiamo l'anonimo
if (nomeUtente) {
    const messaggioDiSaluto = `Ciao, ${nomeUtente}! Benvenuto.`;
    alert(messaggioDiSaluto);
} else {
    alert('Nessun nome inserito. Ciao anonimo!');
}