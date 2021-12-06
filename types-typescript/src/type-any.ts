//tsc app.ts --watch -t es6
//tipo explicito

let idUser: any;
idUser = 1;
idUser = '1';

console.log('idUser',idUser);

// tipo Inferido any
let otherId;
otherId = 1;
otherId = '1';
//otherId = true;

console.log('OtherId',otherId);

let surprise : any = 'hello typescript';
//surprise.sayHello(); //Error
const res = surprise.substring(6); //posible error

console.log('res',res);











