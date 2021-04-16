

var kilometers = parseInt;
var age = parseInt(prompt("Inserire l'età del passeggero:"));

var fee = (kilometers * 0.21);

if ((Number.isNaN(kilometers) || Number.isNaN(age)) || (kilometers <= 0 || age <= 0)) {
    alert("Dati inseriti non validi!");
    document.getElementById("myId").innerHTML= "Impossibile calcolare la tariffa, ricaricare la pagina.";
}
else {
    if (age < 18) {
        var cost = (fee * 0.8).toFixed(2);
    }
    else if (age >= 65) {
        var cost = (fee * 0.6).toFixed(2);
    }
    else {
        var cost = fee.toFixed(2)
    }
    document.getElementById("myId").innerHTML= cost + " €";
}