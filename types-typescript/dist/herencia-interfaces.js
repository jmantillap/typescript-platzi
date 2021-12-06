"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
let album = {
    id: 20,
    title: 'tittulo',
    description: 'descripcion de prueba',
};
const picture = {
    id: 1,
    title: 'famili',
    orientation: PhotoOrientation.Square
};
let newPicture = {};
newPicture.id = 2;
newPicture.title = 'Moon';
console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);
