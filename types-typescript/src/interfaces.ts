//tsc app.ts --watch -t es6
export{};
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}
interface Picture{
    title:string,
    date:string,
    orientation: PhotoOrientation
}
// function showPicture(picture:{
//                     title:string,
//                     date:string,
//                     orientation: PhotoOrientation
//                     }) {
//     console.log(`[title: ${picture.title},
//                  date ${picture.date}],
//                  orientation: ${picture.orientation} ]`);
// }
function showPicture(picture:Picture) {
            console.log(`[title: ${picture.title},
            date ${picture.date}],
            orientation: ${picture.orientation} ]`);
}

let myPic = {
        title: 'Test title',
        date: '2020-03',
        orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title:'test title',
    date: '2020-03',
    orientation:PhotoOrientation.Portrait,
    //extra: 'Prueba' //Error
});

interface PictureConfig{
    title?: string;
	date?: string;
	orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
    const pic = {title:'Default',date:'2020-03' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}

let picture= generatePicture({});
console.log('picture',picture);

picture= generatePicture({title:'travel pic'});
console.log('picture',picture);

picture= generatePicture({title:'travel pic',date:'2021-05'});
console.log('picture',picture);

//interfaz : Usuario
interface User{
    readonly id: number,
    username:string,
    isPro: boolean,    
}

let user:User;
user={id:10,username:'javier mant',isPro:true};
console.log('user',user);
user.username='carlos perez',
//user.id=20; //Error solo lectura,
console.log('user',user);



