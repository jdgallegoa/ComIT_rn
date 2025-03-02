 export function mostrarNumeros(numero1,numero2){
    if(typeof numero1 !== "number" || typeof numero2 !== "number"){
        console.log('Esta función espera valores del tipo number');
    } else if(numero1===numero2){
        console.log(`Los dos números son ${numero1}`);
    } else if(numero1<numero2){
        for(let i=numero1;i<=numero2;i++){
            console.log(i);
        }
    } else {
        for(let i=numero1;i>=numero2;i--){
            console.log(i);
        }
    }
}

const incio = 0;
const fin = 100;

export {incio, fin}