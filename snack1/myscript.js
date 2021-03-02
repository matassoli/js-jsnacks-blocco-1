var num1 = prompt("Inserisci il primo numero");
var num2 = prompt("Inserisci il secondo numero");

if (num1 > num2) {
  document.getElementById("num").innerHTML = "Il numero maggiore è " + num1;
} else if (num1 < num2) {
  document.getElementById("num").innerHTML = "Il numero maggiore è " + num2;
} else if (num1 == num2) {
  document.getElementById("num").innerHTML = "I numeri sono uguali.";
}
