// tsc --watch -t es6
export{};
//Orientacion para fotografias
//const landscape =0;
//const portrait =1;
// const square = 2;
// const panorama=3;

enum PhotoOrientation{
    Landscape=0, //0
    Portrait=1, //1    
    Square=2, //2
    Panorama=3,  //3
}

const landscape: PhotoOrientation=PhotoOrientation.Landscape;

console.log('Landscape:',landscape);
console.log('Landscape:',PhotoOrientation[0]);

enum PictureOrientation{
    Landscape=10, 
    Portrait, 
    Square, 
    Panorama,  
}

console.log('Portrait:',PictureOrientation.Portrait);


enum Country {
    Bolivia='bol',
    Colombia='col',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp'
}

let country : Country = Country.Colombia;
console.log('country',country);





