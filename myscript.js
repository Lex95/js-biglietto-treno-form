window.addEventListener("load", function() {
    onWindowLoad();
})

function onWindowLoad() {
    var myForm = document.getElementById("myForm");

    myForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var nomeElement = document.querySelector("[name='nome']");
        console.log(nomeElement);
        var kmElement = document.querySelector("[name='km']");
        console.log(kmElement);
        var ageElement = document.querySelector("[name='etàPasseggero']");
        console.log(ageElement);

        var form = event.currentTarget;
        var formElements = form.elements;

        var nome = formElements.nome.value;
        var kilometers = formElements.kilometers.value;
        var age = formElements.age.value;

        console.log(nome, kilometers, age);
    })
}

// var fee = (kilometers * 0.21);

// if ((Number.isNaN(kilometers) || Number.isNaN(age)) || (kilometers <= 0 || age <= 0)) {
//     alert("Dati inseriti non validi!");
//     document.getElementById("myId").innerHTML= "Impossibile calcolare la tariffa, ricaricare la pagina.";
// }
// else {
//     if (age < 18) {
//         var cost = (fee * 0.8).toFixed(2);
//     }
//     else if (age >= 65) {
//         var cost = (fee * 0.6).toFixed(2);
//     }
//     else {
//         var cost = fee.toFixed(2)
//     }
//     document.getElementById("myId").innerHTML= cost + " €";
// }