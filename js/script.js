
var bottoneGenera = document.getElementById('genera');
bottoneGenera.addEventListener("click",
  function () {

    var nome = document.getElementById('nome').value;
    console.log(nome);
    document.getElementById('nome-passeggero').innerHTML = (nome);

    var numeroKm = document.getElementById('chilometri').value;
    console.log(numeroKm);

    var eta = document.getElementById('fascia-eta').value;
    console.log(eta);

    var prezzoPerKm = 0.21;
    var prezzoBase = numeroKm * prezzoPerKm;
    console.log(prezzoBase);

    var messaggio = "";
    var sconto;

    if (eta == "minorenne") {
      messaggio = "Congratulazioni! Hai diritto allo sconto del 20%";
      sconto = prezzoBase * 0.2;
      document.getElementById('offerta').innerHTML = (sconto);
    } else if (eta == "over65") {
      messaggio = "Congratulazioni! Hai diritto allo sconto del 40%";
      sconto = prezzoBase * 0.4;
      console.log(messaggio);
    } else {
      sconto = 0;
    }

  }
);


















// // Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// // Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// // il prezzo del biglietto è definito in base ai km (0.21 € al km);
// // va applicato uno sconto del 20% per i minorenni;
// // va applicato uno sconto del 40% per gli over 65.
//
// // Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere.
// var chilometri = prompt("Quanti chilometri devi percorrere?");
// console.log("Hai detto di voler percorrere: " + chilometri + "km");
// // Il programma dovrà chiedere all'utente l'età del passeggero.
// var anni = prompt("Quanti anni hai?");
// console.log("Hai detto di avere: " + anni);
//
// // Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//
// // il prezzo del biglietto è definito in base ai km (0.21 € al km);
// var prezzoPerChilometro = 0.21;
// var somma = chilometri * prezzoPerChilometro + "€";
// console.log(somma);
// // va applicato uno sconto del 20% per i minorenni;
// var minorenne = 17;
// var sommaMinore = chilometri * prezzoPerChilometro / 100 * 80 + "€";
// // va applicato uno sconto del 40% per gli over 65.
// var vecchio = 65;
// var sommaVecchio = chilometri * prezzoPerChilometro / 100 * 60 + "€";
//
//
// if(anni < minorenne) {
//   console.log(sommaMinore);
//   document.getElementById('totale').innerHTML = "Per te è riservato lo sconto Minori";
// }
// else if(anni > vecchio) {
//   console.log(sommaVecchio);
//   document.getElementById('totale').innerHTML = "Sei vecchio, stai a casa";
// }
