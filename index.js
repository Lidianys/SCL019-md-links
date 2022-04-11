const process = require('process');
const {mdLink } = require ('./mdLinks.js');
var args = process.argv;

// console.log('hola', args);
console.log('--------------------Bienvenido--------------------');

//const option es un objeto ya que  va a guardar
const options = {};
// let path se parara la ruta
let path = '';
if (args.some((x) => x === '--validate')) {
    options.validate = true;
  }
  if (args.some((x) => x === '--stats')) {
    options.stats = true;
  }
  if (args[0] === 'mdLink') {
    path = args[1];
  } else {
    path = args[2];
  }
  mdLink(path, options).then(() =>{
    console.log('------------------');
  }).catch((err)=>{
    console.log(err);
  });

  module.exports = {
    mdLink
  };