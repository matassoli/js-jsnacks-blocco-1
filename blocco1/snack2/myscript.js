var word1 = prompt("Inserisci la prima parola:");
var word2 = prompt("Inserisci la seconda parola:");

if (word1.length < word2.length) {
  document.getElementById("word").innerHTML = "La parola più corta è " + word1 + ", la più lunga è " + word2 + ".";
} else if (word1.length > word2.length) {
  document.getElementById("word").innerHTML = "La parola più corta è " + word2 + ", la più lunga è " + word1 + ".";
} else if (word1.length == word2.length) {
  document.getElementById("word").innerHTML = "Le parole hanno la stessa lunghezza.";
}
