//tsc app.ts --watch -t es6
console.log('Hola typescript con Platzi word Javier');
//Number
//Explicito
let phone: Number;
phone = 1;
phone = 54234567;
//phone= 'hola';  //error
//Inferido
let phoneNumber = 1;
//phoneNumber = true; // error por tipo de dato

let hex: number = 0xf00d;
let binary: number = 0b10;
let octal: number = 0o07;

//Boolean
let isPro: boolean;
isPro = true;
//isPro = 12 ; // Error

//inferido
let isUserPro = false;
isUserPro = true;
//isUserPro =  21; // error tipo

//Strings
let userName: string = 'Javier mantilla';
userName = "Javier";
//userName = true;  // Error.

// template String
// uso de back-tick ``

let userInfo: string;
userInfo= `  
    User Info:
    username: ${userName}
    firsName: ${userName + ' Portilla'} 
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('User info',userInfo);


