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

/* verifico che il file esterno di javascript sia correttamente collegato */
console.log("JS OK");

/* imposto la costante per salare la password */
const salt = "21";

/* richiedo il nome in input all'utente */
const inputName = prompt("Quale è il tuo Nome?");
console.log(`Save Name -> ${inputName}`);

/* richiedo il cognome in input all'utente */
const inputSurname = prompt("Quale è il tuo Cognome?");
console.log(`Save Surname -> ${inputSurname}`);

/* richiedo il colore preferito in input all'utente */
const inputColor = prompt("Quale è il tuo colore preferito?");
console.log(`Save Color -> ${inputColor}`);

/* genero la password */
const result = `${inputName}${inputSurname}${inputColor}${salt}`;      
console.log(`Generate Password -> ${result}`);

/* recupero l'elemento da sovrascrivere tramite id */
const elementtowrite = document.getElementById('password');
console.log(`Get Element by id -> ${elementtowrite}`);

/* copio il valore generato all'interno del mio elemento */
elementtowrite.innerHTML = `${result}`;