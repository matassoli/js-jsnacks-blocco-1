var nome = ["nome1", "nome2", "nome3", "nome4"];
var cognome = ["cognome1", "cognome2", "cognome3", "cognome4"];
var nomiFake = [];

for (var i = 1; i <= 3; i++) {
  nomiRand = nome[Math.floor(Math.random() * nome.length)];
  cognomiRand = cognome[Math.floor(Math.random() * cognome.length)];
  var nomeFake = nomiRand + " " + cognomiRand;
  nomiFake.push(nomeFake);
}
console.log(nomiFake);
