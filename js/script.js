// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

let username = prompt('inserisci il tuo nome');
let usersurname = prompt('inserisci il tuo cognome');
let userfavcolor = prompt('inserisci il tuo colore preferito');
let favumber = parseInt(prompt('inserisci il tuo numero preferito'));
favumber = favumber + 5;
let welcome = 'la tua password è:' + username + usersurname + userfavcolor + favumber + '-' + Math.floor(Math.random() * 999);
document.getElementById('password').innerHTML = welcome;