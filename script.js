console.log ('js ok');

const Name = prompt('come ti chiami?', 'nome') 
console.log(Name);

const surname = prompt("qual'è il tuo cognome?" , 'cognome') 
console.log(surname);

const color = prompt("qual'è il tuo colore preferito?", 'colorepreferito') 
console.log(color);

const hello = document .getElementById('hello')

document.getElementById('hello').innerText = Name + surname + color + '21'