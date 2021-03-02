var somma = 0;
for (var i = 1; i <= 10; i++) {
  var numero = parseInt(prompt("Inserisci un numero"));
  somma += numero;
}
document.getElementById("tot").innerHTML = "La somma dei numeri è " + somma;
