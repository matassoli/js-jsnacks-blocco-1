var tot = 0;
for (var i = 1; i < 6; i++) {
  var numeri = parseInt(prompt("Inserisci il " + i + "° numero:"));
  tot += numeri;
}
console.log(tot);


var i = 1,
  tot = 0;
while (i < 6) {
  var numeri = parseInt(prompt("Inserisci il " + i + "° numero:"));
  tot += numeri;
  i++;
}
console.log(tot);
