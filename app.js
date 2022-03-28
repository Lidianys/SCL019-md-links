const path = require('path');
let { constants, statSync} = require('fs');
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



exports.isFile = isFile;
exports.pathExtension = pathExtension;
exports.pathAbsolute = pathAbsolute;
exports.converToAbsolute = converToAbsolute;
exports.verifyAcces = verifyAcces;