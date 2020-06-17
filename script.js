// BIGLIETTO TRENO 2

var creaBtn = document.getElementById("creaBiglietto");
creaBtn.addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var km = document.getElementById("km").value;
  var fasciaEta = document.getElementById("fasciaEta").value;
  var costoKm = 0.21 * km;
  var prezzo;
  var minTreno = 90000;
  var maxTreno = 100000;
  var minCarrozza = 1;
  var maxCarrozza = 10;

  if (fasciaEta == "Minorenne") {
    prezzo = (costoKm - 20%costoKm);
  } else if (fasciaEta == "Over65") {
    prezzo = (costoKm - 40%costoKm);
  } else {
    prezzo = (costoKm);
  }

  var numTreno = Math.floor(Math.random()*(maxTreno - minTreno + 1)) + minTreno;
  var numCarrozza = Math.floor(Math.random()*(maxCarrozza - minCarrozza + 1)) + minCarrozza;

  document.getElementById("passeggero").innerHTML = name + " " + surname;
  document.getElementById("numTreno").innerHTML = numTreno;
  document.getElementById("numCarrozza").innerHTML = numCarrozza;
  document.getElementById("prezzo").innerHTML = prezzo.toFixed(2) + "€";
  document.getElementById("fasciaEta2").innerHTML = fasciaEta;

  document.getElementById("tableBtn").className = "show";
});

var annullaBtn = document.getElementById("annullaBiglietto");
annullaBtn.addEventListener("click", function() {
  document.getElementById("tableBtn").className = "hidden";

  document.getElementById("name").value = " ";
  document.getElementById("surname").value = " ";
  document.getElementById("km").value = " ";
  document.getElementById("fasciaEta").value = "Maggiorenne";



})
