"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, username, firstName, isPro) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.isPro = isPro;
        this.album = [];
    }
    addAlbum(album) {
        this.album.push(album);
    }
    removeAlbum(album) {
        const index = this.album.findIndex(a => a.id === album.id);
        let deteteAlbum;
        if (index >= 0) {
            deteteAlbum = this.album[index];
            this.album.splice(index, 1);
        }
        return deteteAlbum;
    }
}
exports.User = User;
