var cowsay = require('cowsay');
const intro = require('./inicio');

let personaje = "Andy";
let villano = "Rich";
let lugar = "Centraal";
let hobby = "programar";


console.log(intro.historia(personaje, lugar));

console.log(cowsay.say({
  text : 'Hola',
  e : "O O",
  T : "U"
}));
