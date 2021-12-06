//crear una fotogracia
// function createPicture1(title,date,size) {
//    // title
// }

type SquareSize='100x100' | '500x500' | '1000x1000';

function createPicture(title:string,date:string,size:SquareSize) {
    // se crea fotografia
    console.log('crear picture usando',title,date,size);

}

createPicture('my Birthady','2021-10-11','1000x1000');

//createPicture('Colombia','2020-03'); //Error requiere los 3 parametros obligatorios.

//paramentros opcionales en funciones
function createPicture_1(title?:string,date?:string,size?:SquareSize) {
    // se crea fotografia
    console.log('crear picture usando',title,date,size);

}
createPicture_1('my Birthady','2021-10-11','1000x1000');
createPicture_1('Colombia','2020-03');
createPicture_1('Colombia');
createPicture_1();

//flat array function

let createPic=(title:string,date:string,size:SquareSize): object =>{    
    // return {
    //     title:title,
    //     date:date,
    //     size:size,
    // };
    return {title,date,size};
};

const picture=createPic('platzi','2020-03-10','1000x1000');
console.log('picture',picture);

//tipo de retorno con typescript
function handleError(code:number,message:string): never | string {
    //procesamiento del codigo o del mensaje
    if(message==='error'){
        throw new Error(`${message} Code ${code}  `);        
    }else{
        return 'Un error has occurred';
    }
}

try {
    let result= handleError(200,'OK');
    console.log('result',result);
    result= handleError(404,'error'); //never
    console.log('result',result);
} catch (error){
    
}