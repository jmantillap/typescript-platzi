"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let username;
username = 'Javie';
let message = username.length > 5 ? `welcome ${username}` : 'Username es demasiado corto';
console.log('message', message);
let usernameWithId = 'Javier 1';
username = usernameWithId.substring(0, 7);
console.log('Username only', username);
message = username.length > 5 ? `welcome ${username}` : 'Username es demasiado corto';
console.log('message', message);
let helloUser;
helloUser = 'hello paparazy';
username = helloUser.substring(6);
console.log('username:', username);