// module.exports = () => {
//   // ...
// };

const readline = require('readline');
const app = require('./app.js');
let array = [];

let interfazCapture = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazCapture.question('Ingrese la ruta:', function(resp){
    console.log(`Su ruta es: ${resp}`)
    // filesCarpet(resp);
    console.log('las carpetas son:', resp);
    app.verifyAcces(resp).then(() => { 
        if (!app.pathAbsolute(resp)) {
         console.log('la ruta es relativa, por lo que debo transformarla a absoluta');
        resp = app.converToAbsolute(resp);
         console.log('Ahora la ruta es absoluta', resp);                
         }
         return resp;         
  }).then((resp) => {
      if (app.isFile(resp) ) {
        if (app.pathExtension(resp)) {
            console.log('contiene un docuemnto .md');
        }
        else{
            console.log('No es un .md');
        }  
      }
    else{
        console.log('No es un archivo');
        throw new TypeError();

    }
    return resp;
 }).then((resp) => {
    //  app.readLines(resp);
    array = app.readLines(resp);
    
    console.log("lectura de lineas", array );
    return(array);
 })

    });
   
// interfazCapture.close()
