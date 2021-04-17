window.addEventListener("load", function() {
    onWindowLoad();
})

function onWindowLoad() {
    var myForm = document.getElementById("myForm");

    // submit dei dati
    myForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var nomeElement = document.querySelector("[name='nome']");
        var kmElement = document.querySelector("[name='km']");
        var ageElement = document.querySelector("[name='eta']");

        var nome = nomeElement.value;
        var kilometers = kmElement.value;
        var age = ageElement.value;

        if (nome == "" || kilometers == "") {
            alert("Dati mancanti!");
        } else if ((Number.isNaN(kilometers)) || (kilometers <= 0)) {
            alert("Dati inseriti non validi! (Km non è un numero positivo)");
        } else {
            document.getElementById("nomePasseggero").innerHTML = nome;
            if (age == "minor") {
                document.getElementById("etaPasseggero").innerHTML = "Sconto Minorenne";
            } else if (age == "elder") {
                document.getElementById("etaPasseggero").innerHTML = "Sconto Over 65";
            } else {
                document.getElementById("etaPasseggero").innerHTML = "Tariffa Normale";
            }
            
            document.getElementById("costoBiglietto").innerHTML = costCalc(kilometers, age) + "€";

            document.getElementById("carrozza").innerHTML = randomGenerator(2, 15);
            document.getElementById("codiceCP").innerHTML = randomGenerator(90000, 100000);
        }
        
    })

    // reset dei dati precedentemente inseriti nel biglietto
    myForm.addEventListener("reset", function(event) {
        document.getElementById("nomePasseggero").innerHTML = "";
        document.getElementById("etaPasseggero").innerHTML = "";
        document.getElementById("costoBiglietto").innerHTML = "";
        document.getElementById("carrozza").innerHTML = "";
        document.getElementById("codiceCP").innerHTML = "";
    })
}

// calcolatore della tariffa in base ai kilometers da percorrere e dalla age del passeggero
function costCalc(kilometers, age) {
    var fee = (kilometers * 0.21);
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

// generatore di un numero casuale da num1 a num2
function randomGenerator(num1, num2) {
    return (Math.floor(Math.random() * (num2 - num1)) + num1);
}