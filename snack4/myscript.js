var invitati = ["nome1", "nome2", "nome3", "nome4"];
var nome = prompt("Qual è il tuo nome?");

var invitato = false;
for (var i = 0; i < invitati.length; i++) {
  if (invitati[i] == nome) {
    invitato = true;
  }
}

if (invitato) {
  document.getElementById("lista").innerHTML = "Puoi partecipare alla festa.";
} else {
  document.getElementById("lista").innerHTML = "Non puoi partecipare alla festa.";
}
