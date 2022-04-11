const app = require('./app.js');
let colors = require('colors');
let arrayObject = [];

const mdLink = function(path, options = {}){
    return new Promise((resolve) =>{
   
    app.verifyAcces(path).then(() => { 
        if (!app.pathAbsolute(path)) {
         console.log('la ruta es relativa, por lo que debo transformarla a absoluta');
         path = app.converToAbsolute(path);
         console.log('Ahora la ruta es absoluta', path);                
         }
         return path;         
  }).then((path) => {
      if (app.isFile(path) ) {
        if (app.pathExtension(path)) {
            console.log('contiene un docuemnto .md'.bgGreen);
          

        }
       
        else{
            // console.log(colors.bgRed('No es un .md'));
            console.log('No es un archivo .md'.bgRed);
            throw new TypeError();
        }  
      }
        else{
        console.log('No es un archivo');
        throw new TypeError();

    }
    return path;
 }).then((path) => {
  
    return app.readLines(path);

 }).then((arrayLink) => {
    // console.log('El array1 tiene que el valor:', arrayLink);
    const promiseArr = arrayLink.map((url) => app.verifyLinks(url).then((status) => {
      arrayObject.push(status);
    })
      .catch((err) => {
        console.log('La ruta  no existe');
        console.log(err);
      }));
    return Promise.all(promiseArr);

  
}).then(() =>{
    // console.log('el array de objetos es ', arrayObject);
    let countValid = 0;
    let countInvalid = 0;
    //cuando ponen --validate y --stats
    if (options.validate && options.stats) {
        arrayObject.forEach((e) => {
            if(e.status){ 
             countValid += 1;
            }else{
                countInvalid += 1;
            }
            
      });
      console.log('Los links encontrados son '.yellow , arrayObject.length);
            console.log('Cantidad de links validos'.green , countValid);
            console.log('Cantidad de links invalidos'.red , countInvalid);
     
      arrayObject.forEach((e) => {
        if (e.status) {
          console.log(`Link: ${e.linkname} Status: ${e.status}`.green);
        } else {
          console.log(`Link: ${e.linkname} Status: ${e.status}`.red);
        }
      });
    } else {
        //cuando ponen --stats 
      if (options.stats) {
        console.log('link encontrados:'.green , arrayObject.length);
        arrayObject.forEach((e) => {
          if (e.status) {
            countValid += 1;
          } else {
            countInvalid += 1;
          }
        });
        console.log('link validos:'.green, countValid);
        console.log('link rotos:'.red , countInvalid);
      };
      //cuando ponen --validate
      if (options.validate) {
        arrayObject.forEach((e) => {
            if (e.status) {
              console.log(`Link validos: ${e.linkname} Status: ${e.status}`.green);
            } else {
              console.log(`Link invalidos: ${e.linkname} Status: ${e.status}`.red);
            } 
      });
    };

    }
});
resolve(arrayObject);
});

};
module.exports = { mdLink };