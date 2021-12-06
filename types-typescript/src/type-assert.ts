export{};
// tsc --watch -t es6
//<tipo>  //Angle bracket syntax
let username : any;
username = 'Javie'

//tenemos una cadena, TS CONFIAR EN MI <string>
let message: string = (<string>username).length > 5 ? `welcome ${username}` : 'Username es demasiado corto';
console.log('message',message) 

let usernameWithId: any= 'Javier 1';
//como onbtener username
username=(<string>usernameWithId).substring(0,7);
console.log('Username only',username) 
//sintaxis "as"

message = (username as string).length > 5 ? `welcome ${username}` : 'Username es demasiado corto';
console.log('message',message) 

let helloUser: any;
helloUser= 'hello paparazy';
username= (helloUser as string).substring(6);
console.log('username:',username);


