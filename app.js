const path = require('path');
let { constants, statSync, createReadStream} = require('fs');
const readline = require('readline')
const fsPromesas = require('fs/promises');


//para verificar si tiene extension .md
const pathExtension = (resp)=> path.extname(resp) === '.md';

//para verificar si la ruta es absoluta
const pathAbsolute = (resp) => path.isAbsolute(resp);

//si no es absoluta transformarla a absoluta
const converToAbsolute = (resp) => path.resolve(resp);

//verificar que sea archivo 
function isFile(resp) {
  var stats = statSync(resp); // metadata
  console.log("Es archivo: ", stats.isFile());
  return stats.isFile();
}


//verifico si la ruta o archivo existe en la computadora
function verifyAcces (resp) {
  return fsPromesas.access(resp, constants.R_OK);
};

//leer las lineas
function readLines(resp){
  let array = [];
  let arrayLink = [];
  let lector = readline.createInterface({
  input: createReadStream(resp)
});

lector.on("line", linea => {
  // console.log("Tenemos una línea:", linea);
  let regular = /(https?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;
  if (regular.test(linea)) {
    arrayLink = linea.match(regular);
    array.push(arrayLink[0]);// el array tiende a tener 4 posiciones, 1 del linmk completo y las otras del link desmenuzado
   console.log("lectura de linea dentro de lector", array);
  }
 
 });
 console.log("lectura de link en app.js", array);
 return array;
}


exports.isFile = isFile;
exports.pathExtension = pathExtension;
exports.pathAbsolute = pathAbsolute;
exports.converToAbsolute = converToAbsolute;
exports.verifyAcces = verifyAcces;
exports.readLines = readLines;