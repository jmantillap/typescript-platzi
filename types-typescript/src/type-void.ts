//void



//tipo explicito
function showInfo(user:any) : any {
    console.log('User Info:',user.id,user.userName,user.firstName);
    //return 'hola'
}

showInfo({id: 1, userName: 'javier', firstName: 'apellido'})

//tipo inferido
 function showFormattedInfo(user:any) {
    console.log('User Info:',`
        id: ${user.id}
        username: ${user.userName}
        firstName: ${user.firstName}
    `);
 }

showFormattedInfo({id: 1, userName: 'luixaviles', firstName: 'Luis'});

//tipo void como tipo de dato en una varible

let unusable : void;
//unusable=null;
unusable= undefined;

//tipo: never
function handleError(code:number,message:string): never {
    //Process your code here
    //generar un mensaje    
    throw new Error(`${message}. Code ${code}`);        
    
}

try {
    handleError(404,'not Found');    
} catch (error) {    
    //console.log(error);
}

function sumNumbers(limit:number):never {
    let sum=0;
    while (true) {
        sum++;
    }
    //return sum;
}
sumNumbers(10);
//ciclo infinito programa nunca termina








