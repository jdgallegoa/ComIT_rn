function crearPromesa(delay, tieneError=false){
    return new Promise((onSucess, onError)=>{
        setTimeout(()=>{
            if(!tieneError){
                onSucess(`Pasaron ${delay} segundos y la promesa fue exitosa`);
            } else{
                onError(`Pasaron ${delay} segundos y la promesa no fue exitosa`)
            }
        },delay*1000);
    });
};

const promesa1 = crearPromesa(1);
const promesa2 = crearPromesa(5);
const promesa3 = crearPromesa(10);
const promesa4 = crearPromesa(3,true);

promesa1
    .then((mensaje)=>{
        console.log(mensaje)})
    .catch((mensaje)=>
        {console.log(mensaje)});

promesa2
    .then((mensaje)=>{
        console.log(mensaje)})
    .catch((mensaje)=>
        {console.log(mensaje)});

promesa3
    .then((mensaje)=>{
        console.log(mensaje)})
    .catch((mensaje)=>
        {console.log(mensaje)});

promesa4
    .then((mensaje)=>{
        console.log(mensaje)})
    .catch((mensaje)=>
        {console.log(mensaje)});