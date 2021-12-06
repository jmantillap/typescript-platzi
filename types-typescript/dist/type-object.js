"use strict";
let user;
user = {};
user = {
    id: 1,
    userName: 'pararazzy',
    firsName: 'pablo',
    isPro: true,
};
console.log('user', user);
const myObject = {
    id: 1,
    userName: 'pararazzy',
    firsName: 'pablo',
    isPro: true,
};
const isInstance = myObject instanceof Object;
console.log('isInstance', isInstance);
console.log('userName', myObject.userName);
