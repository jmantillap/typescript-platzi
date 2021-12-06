// tsc --watch -t es6
export{};

//[1,'user']
let user:[number,string];

user = [1,'javiermantilla'];
console.log('user',user)
console.log('username',user[1]);
console.log('username.length',user[1].length);
console.log('id',user[0]);

//tuplas con varios valores
// id. username, isPro

let userInfo: [number,string,boolean];
userInfo = [2,'javier',true];
console.log('userinfo',userInfo);

//arreglo de tuplas

let array:[number,string][]=[];
array.push([1,'oscar']);
array.push([2,'maria']);
array.push([3,'juan']);

console.log('array',array);

// Uso de funciones Array 
// leensQueen -> lensqueen001
array[2][1]=array[2][1].concat('001');
console.log('array',array);






