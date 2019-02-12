var cowsay = require('cowsay');
const intro = require('./inicio');
const nudo = require('./nudo');
const final = require('./final');


let personaje = "Andy";
let villano = "Rich";
let lugar = "En far far away";
let hobby = "programar";


console.log(intro.historia(personaje, lugar));
console.log(nudo.historia(personaje, villano, hobby, lugar));
console.log(final.historia(personaje, villano, hobby, lugar));


console.log(cowsay.say({
  text : 'Hola',
  e : "O O",
  T : "U"
}));
