var invitati = ["nome1", "nome2", "nome3", "nome4"];
var nome = prompt("Qual è il tuo nome?");
for (var i = 0; i < invitati.length; i++) {
  if (invitati[i] == nome) {
    document.getElementById("lista").innerHTML = "Puoi partecipare alla festa.";
    break;
  } else {
    document.getElementById("lista").innerHTML = "Non puoi partecipare alla festa.";
  }
}
