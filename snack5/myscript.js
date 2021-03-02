var numDispari = [];

for (var i = 1; i <= 6; i++) {
  var numero = parseInt(prompt("Inserisci un numero"));
  if (numero % 2 == 1) {
    numDispari.push(numero);
    console.log(numDispari);
  }
}
