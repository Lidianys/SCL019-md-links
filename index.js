// module.exports = () => {
//   // ...
// };

const readline = require('readline');
const app = require('./app.js');

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
            console.log('no contiene .md');
        }  
      }
    else{
        console.log('No es un archivo');
    }
    return resp;
 }).then((resp) => {
     
 })
    });
    // if (app.verifyAcces(resp) === true) {
    //     if (!app.pathAbsolute(resp)) {
    //         console.log('la ruta es relativa, por lo que debo transformarla a absoluta');
    //         resp = app.converToAbsolute(resp);
    //         console.log('Ahora la ruta es absoluta', resp);
                
    //     }
    //         if (app.pathExtension(resp)) {
    //             console.log('contiene un docuemnto .md');
    //         }
    //         else{
    //             console.log('no contiene .md');
    //         }  
    // }
    
// interfazCapture.close()
