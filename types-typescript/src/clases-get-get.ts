//tsc app.ts --watch -t es6
export{};
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
};

//get y set

class Picture{
    //propiedades
    private _id:number;
    private _title:string;
    private _orientation:PhotoOrientation;

    public constructor(id:number,
                title:string,
                orientation:PhotoOrientation){
             this._id=id;
             this._title=title;
             this._orientation=orientation;       
    }
    get id(){ return this._id; }
    set id(id:number){ this._id=id; }
    get title(){ return this._title; }
    set title(title:string){ this._title=title; }
    get orientation(){ return this._orientation; }
    set orientation(orientation:PhotoOrientation){ this._orientation=orientation;    }

    //Comportmiento de la clase
    public toString(){
        return `[id: ${this.id}, title: ${this.title}, orientatio : ${this.orientation} ]`
    }
}

class Album {
    private _id:number;
    private _title:string;
    private _pictures:Picture[]=[];

    public constructor(id:number,title:string,){
        this._id=id;
        this._title=title;
        this._pictures=[];
    }
    get id(){ return this._id; }
    set id(id:number){ this._id=id; }
    get title(){ return this._title; }
    set title(title:string){ this._title=title; }
    get pictures():Picture[]{ return this.pictures;}

    public addPicture(picture:Picture){
        this._pictures.push(picture);
    }
}

const album:Album=new Album(1,'personal picture');
const picture:Picture=new Picture(1,'titulo',PhotoOrientation.Square);
album.addPicture(picture);
//picture.id=2;
album.addPicture(picture);
console.log('album',album);

//accediendo a los metodos publicos de la clase
picture.id=100; //private
picture.title='otro titulo'; //prievate
album.title='Personl actividad'; //private
console.log('album:',album);
console.log('picture.id:',picture.id);






