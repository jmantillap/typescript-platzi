"use strict";
function showInfo(user) {
    console.log('User Info:', user.id, user.userName, user.firstName);
}
showInfo({ id: 1, userName: 'javier', firstName: 'apellido' });
function showFormattedInfo(user) {
    console.log('User Info:', `
        id: ${user.id}
        username: ${user.userName}
        firstName: ${user.firstName}
    `);
}
showFormattedInfo({ id: 1, userName: 'luixaviles', firstName: 'Luis' });
let unusable;
unusable = undefined;
function handleError(code, message) {
    throw new Error(`${message}. Code ${code}`);
}
try {
    handleError(404, 'not Found');
}
catch (error) {
}
function sumNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
}
sumNumbers(10);
