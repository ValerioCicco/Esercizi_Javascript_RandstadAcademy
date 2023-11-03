document.addEventListener("DOMContentLoaded", function() {
    // Riferimenti agli elementi HTML
    const linkDeposito = document.getElementById("linkDeposito");
    const linkPrelievo = document.getElementById("linkPrelievo");
    const container = document.querySelector(".container");
    const container2 = document.querySelector(".container2");
    const container3 = document.querySelector(".container3");

    // Ascoltatori per i link di deposito e prelievo
    linkDeposito.addEventListener("click", function() {
        // Nascondi container
        container.style.display = "none";
        // Mostra container2
        container2.style.display = "flex";
    });

    linkPrelievo.addEventListener("click", function() {
        // Nascondi container
        container.style.display = "none";
        // Mostra container3
        container3.style.display = "flex";
    });

    // Funzione per calcolare il totale nel deposito
    const calcoloTotaleDeposito = document.getElementById("calcoloTotaleDeposito");
    calcoloTotaleDeposito.addEventListener("click", function() {
        const cifraDaDepositare = parseFloat(document.getElementById("cifraDaDepositare").value);
        const cifraAttuale = parseFloat(document.getElementById("cifraAttuale").value);
        const nuovoSaldo = cifraAttuale + cifraDaDepositare;
        alert("Nuovo saldo: " + nuovoSaldo);
        // Nascondi container2 e mostra container
        container2.style.display = "none";
        container.style.display = "flex";
    });

    // Funzione per calcolare il totale nel prelievo
    const calcoloTotalePrelievo = document.getElementById("calcoloTotalePrelievo");
    calcoloTotalePrelievo.addEventListener("click", function() {
        const cifraDaPrelevare = parseFloat(document.getElementById("cifraDaPrelevare").value);
        const cifraAttuale = parseFloat(document.getElementById("cifraAttuale").value);
        if (cifraDaPrelevare > cifraAttuale) {
            alert("Errore: Impossibile prelevare più di quanto disponibile.");
        } else {
            const nuovoSaldo = cifraAttuale - cifraDaPrelevare;
            alert("Nuovo saldo: " + nuovoSaldo);
        }
        // Nascondi container3 e mostra container
        container3.style.display = "none";
        container.style.display = "flex";
    });
});