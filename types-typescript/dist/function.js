"use strict";
function createPicture(title, date, size) {
    console.log('crear picture usando', title, date, size);
}
createPicture('my Birthady', '2021-10-11', '1000x1000');
function createPicture_1(title, date, size) {
    console.log('crear picture usando', title, date, size);
}
createPicture_1('my Birthady', '2021-10-11', '1000x1000');
createPicture_1('Colombia', '2020-03');
createPicture_1('Colombia');
createPicture_1();
let createPic = (title, date, size) => {
    return { title, date, size };
};
const picture = createPic('platzi', '2020-03-10', '1000x1000');
console.log('picture', picture);
function handleError(code, message) {
    if (message === 'error') {
        throw new Error(`${message} Code ${code}  `);
    }
    else {
        return 'Un error has occurred';
    }
}
try {
    let result = handleError(200, 'OK');
    console.log('result', result);
    result = handleError(404, 'error');
    console.log('result', result);
}
catch (error) {
}
