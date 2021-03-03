do {
  var numero = prompt("Inserisci un numero di 4 cifre:");
} while (!(numero.length >= 1 && numero.length <= 4));


tot = 0;
for (var i = 0; i < numero.length; i++) {
  tot += parseInt(numero[i]);
}
console.log(tot);
