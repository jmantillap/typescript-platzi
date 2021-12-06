// tsc --watch -t es6
//explicita

let nullVariable: null;
nullVariable = null;
//nullVariable = 1; //Error
let otherVariable=null;
otherVariable = 'test'

console.log('nullVariable',nullVariable);
console.log('otherVariable',otherVariable);

//Undefined

let undefinedVariable: undefined = undefined;
//undefinedVariable= 'test'; //Error

let otherUndefined= undefined;
otherVariable=2;

console.log('undefinedVariable',undefinedVariable);
console.log('otherUndefined',otherVariable);

//null y undefined: como subtipos
// strictNullChecks
//$ tsc ./src/type-null-undefined.ts --strictNullChecks
let albumName: string;
//albumName = null;
//albumName = undefined; 


