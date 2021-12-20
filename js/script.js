/* 
Traccia:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
Bonus:
scrivere "La tua password è nomecogonomecolorepreferito21"
Abbellire la pagina dal punto di vista grafico a piacimento!

*********************** PROCEDURA OPERATIVA ***********************

0.inizializzo la costante 21 da concatenare
1.chiedere all'utente il nome tramite un prompt()
2.salvare il nome in una costante
3.chiedere il cognome
4.salvare il cognome in una costante
5.chiedere colore preferito
6.salvare in una costante il colore preferito
7.salvo il result la concatenazione delle varie stringhe aggiungendo 21 da una costante
8.recupero l'elemento che racchiude il testo
9.copio il valore risult all'interno del div con un'innerHTML

*/
const salt = "21";

const inputName = prompt("Quale è il tuo Nome?");
const inputSurname = prompt("Quale è il tuo Cognome?");
const inputColor = prompt("Quale è il tuo colore preferito?");

const result = `${inputName}${inputSurname}${inputColor}${salt}`;      

const elementtowrite = document.getElementById('password')