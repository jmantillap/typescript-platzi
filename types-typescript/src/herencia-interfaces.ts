//tsc app.ts --watch -t es6
export{};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Entity{
    id: number;
    title: string;
}
interface Album extends Entity {    
    description:string;
}
interface Picture extends Entity {    
    orientation: PhotoOrientation,
}

let album:Album={
    id:20,
    title: 'tittulo',
    description:'descripcion de prueba',
};
const picture:Picture={
    id:1,
    title:'famili',
    orientation:PhotoOrientation.Square
};

let newPicture={} as Picture;
newPicture.id = 2
newPicture.title = 'Moon'

console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);


