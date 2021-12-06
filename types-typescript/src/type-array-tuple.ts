// tsc --watch -t es6
// Corchetes []

// tipo Explicito
let users:string[];
users=['javier','javier 1','eliana'];
//users = [1,true,'cadena']; //error

//tipos inferidos
let otherUsers= ['javier','javier 1','eliana'];
//otherUsers = [1,true,'cadena']; //error

//Arra<TIPO>
let pictureTitles: Array<string>;
pictureTitles=['favorite sunset','vacation tipe','lanscape'];

//acceder valores arreglo 
console.log('firts users:',users[0]);
console.log('picturetitles:',pictureTitles[0]);

//propiedades en Array
console.log('users.length',users.length);

//uso de funciones en arreglos
users.push('aPlatzi Username');
users.sort()

console.log('users',users);

//users.