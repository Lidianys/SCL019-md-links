const app = require('../app.js');
const document1 = 'probando.md';
const document2 = 'prueba.js';
// test para ver si termina en .md
describe('pathExtension', () => {

  it('should be true if it is an .md', () => {
    console.log(document1);
    expect(app.pathExtension(document1)).toBe(true);
  });
  it('should be false if it is not an .md', () => {
    console.log(document2);
    expect(app.pathExtension(document2)).toBe(false);
  });
});
//PAra vern si la ruta es absoluta
const ruta1 = 'C:\\Users\\lidia\\OneDrive\\Documentos\\Proyecto md-link\\SCL019-md-links\\pruebas de ruta\\probando.md';
const ruta2 = 'pruebas de ruta\\probando.md';
describe('pathAbsolute', () => {

  it('should be true if it is absolute', () => {
    console.log(ruta1);
    expect(app.pathAbsolute(ruta1)).toBe(true);
  });
  it('should be false if it is not absolute', () => {
    console.log(ruta2);
    expect(app.pathAbsolute(ruta2)).toBe(false);
  });
});

//testeando la convecciòn a absoluta
const ruta3 = 'C:\\Users\\lidia\\OneDrive\\Documentos\\Proyecto md-link\\SCL019-md-links\\pruebas de ruta\\prueba.js';
const ruta4 ='pruebas de ruta\\prueba.js';
describe('converToAbsolute', () => {

  it('should return ruta1 absoluta', () => {
    console.log(ruta2);
    expect(app.converToAbsolute(ruta2)).toBe(ruta1);
  });
  
  it('should return ruta3 absoluta', () => {
    console.log(ruta3);
    expect(app.converToAbsolute(ruta4)).toBe(ruta3);
  });
 
});

//testear si es un archivo
// const file = 'C:\\Users\\lidia\\OneDrive\\Documentos\\Proyecto md-link\\SCL019-md-links\\pruebas de ruta\\prueba.js';
const carpet = 'pruebasderuta';
const file = 'pruebasderuta\\probando.md';
describe('isFile', () => {

  it('should be true if it is a file', () => {
    console.log(file);
    expect(app.isFile(file)).toBe(true);
  });
  
  it('should be false ifit is not a file ', () => {
    console.log(carpet);
    expect(app.isFile(carpet)).toBe(false);
  });
 
});

//testeando si existe en el computador
const noExist = 'C:\\Mein\\lidia\\OneDrive\\Documentos\\Proyecto\\SCL019-s\\pruebas de ruta';
describe('probando la funcion verifyAccess para verificar si el archivo existe', () => {

  it('deberia validar si el archivo exite', () => {
    const result = app.verifyAcces(file);

    expect(result).toBeTruthy();
  });
  it('deberia indicar que no existe', () => {
    const result = app.verifyAcces(noExist);

    expect(result).toBeTruthy();
  });
});
//testear leer lineas
let path = 'pruebasderuta\\probando.md';
let array = ['https://docs.npmjs.com/cli/v8/configuring-npm/package-json',
'https://mail.google.com/mail/u/0/#inbox/FMfcgzGmvTxWGWlcQKGGwPHpJsGcRLSK',
'https://nodejs.org/api/fs.html#fsreaddirsyncpath-options',
'https://www.linkedin.com/jobs/search/?alertAction=viewjobs&f_TPR=a1646515326-&keywords=Desarrollador%20de%20front-end&savedSearchId=1725922259&searchAlertRefId=35d4ee26-f046-4bae-aa6d-047362168b90',
'https://parzibyte.me/blog/2018/12/27/leer-archivo-node-js-fs-readline/#Abrir_archivo_y_leer_linea_por_linea_con_NodeJs_y_JavaScript']
  test('debe devolver array de 5 link', async () => {
    const data = await app.readLines(path);
    expect(data).toStrictEqual(array);
  });

  test('debe devolver array vacio ', async () => {
    const data = await app.readLines(file);
    expect(data).toStrictEqual([]);
  });