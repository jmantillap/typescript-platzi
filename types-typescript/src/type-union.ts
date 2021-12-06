// tsc --watch -t es6
export{}

// // 10 , '10'
// let idUser: number | string;

// idUser =10;
// idUser='10'

// //Buscar username dado un ID
// function getUserNameById(id:number | string){
//     //logica de negocios
//     return 'javierMantilla'
// }

// getUserNameById(10);
// getUserNameById('10');

//Alias de tipos para typescript

// 10 , '10'
type IdUser= number | string;
type UserName= string;

let idUser: IdUser ;
idUser =10;
idUser='10'

//Buscar username dado un ID
function getUserNameById(id:IdUser): UserName{
    //logica de negocios
    return 'javierMantilla'
}

getUserNameById(10);
getUserNameById('10');

console.log(getUserNameById('10'));

// Tipos literales
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
//let smallPicture:SquareSize = '200x200';  //Error
let smallPicture:SquareSize = '100x100';
let mediumPicture:SquareSize = '500x500';

type PhotoSizes = '75x75' | '240x180' | '500x375' | '1024x768' | '3072x2304'






