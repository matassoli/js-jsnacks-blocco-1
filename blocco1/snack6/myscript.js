do {
  var numero = parseInt(prompt("Scrivi un numero"));
} while (isNaN(numero));

for (var i = 1; i <= numero; i++) {
  console.log(Math.pow(i, 3));
}
