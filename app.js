const frutas = ['platano', 'manzana', 'platano', 'pera'];
frutas.forEach(item=>{
  console.log(item)
  console.count(item)
})
const cowsay = require('cowsay');
console.log(cowsay.say({
    text:'Im a moodule',
    e: 'oO',
    T: 'U'
}));