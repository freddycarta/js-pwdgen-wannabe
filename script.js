console.log ('js ok');

const Name = prompt('come ti chiami?', 'will') 
console.log(Name);

const surname = prompt("qual'è il tuo cognome" , 'smith') 
console.log(surname);

const color = prompt("qual'è il tuo colore preferito", 'verde') 
console.log(color);

const hello = document .getElementById('hello')

hello.innerText = 'name' + 'surname' + 'color' + '21'