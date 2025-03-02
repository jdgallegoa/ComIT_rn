// Crear una variable con el nombre contador y asignar 1 como valor incial.
// Crear un timer que se llame cada 1 segundo y muestre en pantalla un mensaje.
// A los 10 segundos cortar la ejecución del timer.

let contador = 1;

const timer = setInterval(()=>{
    if(contador<10){
        console.log(`Pasaron ${contador} segundos`);
        contador++;
    } else{
        clearInterval(timer);
        console.log(`Fin, pasaron ${contador} segundos`);
    }
},1000);
