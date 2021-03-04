somma = 0;
numeri = [2, 3, 6, 5, 7, 9, 8, 6, 11, 23, 64, 99];
for (var i = 0; i < numeri.length; i += 2) {
  somma += numeri[i];
}
console.log(somma);
