"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() { return this._id; }
    get title() { return this._title; }
    set title(title) { this._title = title; }
}
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    get orientation() { return this._orientation; }
    set orientation(orientation) { this._orientation = orientation; }
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientatio : ${this.orientation} ]`;
    }
}
Picture.photoOriention = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this._pictures = [];
        this._pictures = [];
    }
    get pictures() { return this.pictures; }
    addPicture(picture) {
        this._pictures.push(picture);
    }
}
const album = new Album(1, 'personal picture');
const picture = new Picture(1, 'titulo', PhotoOrientation.Square);
album.addPicture(picture);
album.addPicture(picture);
console.log('album', album);
picture.title = 'otro titulo';
album.title = 'Personl actividad';
console.log('album:', album);
console.log('picture.id:', picture.id);
console.log('PhotoOrienttion:', Picture.photoOriention.Landscape);
