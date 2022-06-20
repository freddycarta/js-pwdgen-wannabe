console.log ('js ok');

const Name = prompt('come ti chiami?', 'will') 
console.log(Name);

const surname = prompt("qual'è il tuo cognome?" , 'smith') 
console.log(surname);

const color = prompt("qual'è il tuo colore preferito?", 'verde') 
console.log(color);

const hello = document .getElementById('hello')


document.getElementById('hello').innerText = Name + surname + color + '21'

// document.getElementById('TUOID').innerText = `${Name}${surname}${color}21`