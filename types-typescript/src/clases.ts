//tsc app.ts --watch -t es6
export{};
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
};

class Picture{
    //propiedades
    public id:number;
    public title:string;
    public orientation:PhotoOrientation;

    public constructor(id:number,
                title:string,
                orientation:PhotoOrientation){
             this.id=id;
             this.title=title;
             this.orientation=orientation;       
    }

    //Comportmiento de la clase
    public toString(){
        return `[id: ${this.id}, title: ${this.title}, orientatio : ${this.orientation} ]`
    }
}

class Album{
    public id:number;
    public title:string;
    public pictures:Picture[]=[];

    public constructor(id:number,title:string,){
        this.id=id;
        this.title=title;
        this.pictures=[];
    }

    public addPicture(picture:Picture){
        this.pictures.push(picture);
    }
}

const album:Album=new Album(1,'personal picture');
const picture:Picture=new Picture(1,'titulo',PhotoOrientation.Square);
album.addPicture(picture);
//picture.id=2;
album.addPicture(picture);
console.log('album',album);

//accediendo a los metodos publicos de la clase
picture.id=100;
picture.title='otro titulo'; //public
album.title='Personl actividad';
console.log('album',album);





