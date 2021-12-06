// tsc --watch -t es6
//type : object
let user: object;
user = {}; //Object
user = {
    id:1,
    userName:'pararazzy',
    firsName:'pablo',
    isPro: true,
};

console.log('user',user);
//Object vs object (Clase JS vs tipo dato TS)
//console.log('userName',user.userName);

const myObject= {
    id:1,
    userName:'pararazzy',
    firsName:'pablo',
    isPro: true,
};

const isInstance = myObject instanceof Object; //clase object de javascript

console.log('isInstance', isInstance);

console.log('userName',myObject.userName);