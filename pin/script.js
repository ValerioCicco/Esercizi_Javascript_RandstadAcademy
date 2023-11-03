//CONST PIN
//const pin = "34292";
var pin = document.getElementById("pin");
//ref bottone
var bottoneInvio = document.getElementById("invio");

bottoneInvio.addEventListener("click", function() {
    
    if(pin.value === "3429234") {
        window.location.href = '../pin/success.html'
    } else if(pin != "3429234") {
        window.location.href = '../pin/error.html'
    }
})