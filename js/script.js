// Creazione Password insicurissima
alert('ATTENZIONE! \nQuesto è il sito migliore al mondo per creare una password inutile :)');

// Chiedere il nome all'utente
const username = prompt("Ciao utente, qual è il tuo nome?");
console.log(username);

// Chiedere il cognome all'utente
const surname = prompt("Qual è il tuo cognome?");
console.log(surname);

// Chiedere il colore preferito all'utente
const favoriteColor = prompt("Qual è il tuo colore preferito?");
console.log(favoriteColor);

// Generiamo la nuova password
const password = `Utente, questa è la tua nuova inutile password: ${username + surname + favoriteColor + 21}`;
console.log(password);

// Stampiamo la nuova inutile password
document.getElementById('password-result').innerHTML = password;