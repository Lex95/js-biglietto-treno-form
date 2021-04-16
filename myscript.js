window.addEventListener("load", function() {
    onWindowLoad();
})

function onWindowLoad() {
    var myForm = document.getElementById("myForm");

    myForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var nomeElement = document.querySelector("[name='nome']");
        var kmElement = document.querySelector("[name='km']");
        var ageElement = document.querySelector("[name='eta']");

        var nome = nomeElement.value;
        var kilometers = kmElement.value;
        var age = ageElement.value;

        console.log(nome, kilometers, age);

        document.getElementById("nomePasseggero").innerHTML = nome;
        if (age == "minor") {
            document.getElementById("etaPasseggero").innerHTML = "Sconto Minorenne";
        } else if (age == "elder") {
            document.getElementById("etaPasseggero").innerHTML = "Sconto Over 65";
        } else {
            document.getElementById("etaPasseggero").innerHTML = "Tariffa Normale";
        }
        
        document.getElementById("costoBiglietto").innerHTML = costCalc(kilometers, age);
    })
}

function costCalc(kilometers, age) {
    var fee = (kilometers * 0.21);

    if ((Number.isNaN(kilometers)) || (kilometers <= 0)) {
        alert("Dati inseriti non validi! (Km non è un numero positivo)");
    }
    else {
        if (age == "minor") {
            var cost = (fee * 0.8).toFixed(2);
        }
        else if (age == "elder") {
            var cost = (fee * 0.6).toFixed(2);
        }
        else {
            var cost = fee.toFixed(2)
        }
        return cost;
    }
}

