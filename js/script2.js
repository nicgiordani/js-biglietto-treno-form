
var bottoneGenera = document.getElementById('genera');
bottoneGenera.addEventListener("click",
  function () {

    var nome = document.getElementById('nome').value;
    console.log(nome);
    document.getElementById('nome-passeggero').innerHTML = (nome);

    var numeroChilometri =  document.getElementById('chilometri').value;
    console.log(numeroChilometri);

    var eta = document.getElementById('fascia-eta').value;
    console.log(eta);

    var prezzoPerChilometro = 0.21;
    var prezzoBase = numeroChilometri * prezzoPerChilometro;

    if (eta == "minorenne") {
      document.getElementById('fascia-eta').value;
      console.log(prezzoBase / 100 * 80);
      document.getElementById('offerta').innerHTML = "Sconto <br/> minori";
      document.getElementById('prezzo').innerHTML = (prezzoBase / 100 * 80 + "€");

    } else if (eta == "maggiorenne") {
      document.getElementById('fascia-eta').value;
      document.getElementById('offerta').innerHTML = "Prezzo <br/> base";
      document.getElementById('prezzo').innerHTML = (prezzoBase + "€");

      console.log(prezzoBase);
    } else {
      console.log(prezzoBase / 100 * 60);
      document.getElementById('offerta').innerHTML = "Sconto <br/> over-65";
      document.getElementById('prezzo').innerHTML = (prezzoBase / 100 * 60 + "€");
    }

    var numeroCarrozza = Math.floor(Math.random() * 10);
    document.getElementById('carrozza').innerHTML = numeroCarrozza;

    var numeroCP = Math.floor(Math.random() * 100000) + 1000;
    document.getElementById('cp').innerHTML = numeroCP;

  }
);
