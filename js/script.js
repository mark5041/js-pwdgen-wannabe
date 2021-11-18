// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

let username = prompt('inserisci il tuo nome');
let usersurname = prompt('inserisci il tuo cognome');
let userfavcolor = prompt('inserisci il tuo colore preferito');
let welcome = username + ' ' + usersurname + ' ' + userfavcolor;
document.getElementById('benvenuto').innerHTML = welcome;