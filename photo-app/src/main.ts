import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";

const user= new User(1,'Javier','javier mantilla',true);
const album= new Album(10,'platzy picture');
const picture = new Picture(1,'typescript curse','2023-01',PhotoOrientation.Landscape);

user.addAlbum(album);
album.addPicture(picture);
console.log('user:',user);

user.removeAlbum(album);
console.log('user:',user);

