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
class Picture {
    constructor(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    get id() { return this._id; }
    set id(id) { this._id = id; }
    get title() { return this._title; }
    set title(title) { this._title = title; }
    get orientation() { return this._orientation; }
    set orientation(orientation) { this._orientation = orientation; }
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientatio : ${this.orientation} ]`;
    }
}
class Album {
    constructor(id, title) {
        this._pictures = [];
        this._id = id;
        this._title = title;
        this._pictures = [];
    }
    get id() { return this._id; }
    set id(id) { this._id = id; }
    get title() { return this._title; }
    set title(title) { this._title = title; }
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
picture.id = 100;
picture.title = 'otro titulo';
album.title = 'Personl actividad';
console.log('album:', album);
console.log('picture.id:', picture.id);
