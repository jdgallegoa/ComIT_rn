// Crear la función promedio que acepta 5 notas (numbers)
// Mostrar en consola el promedio de la cursada

function promedio(n1,n2,n3,n4,n5){
    return (n1+n2+n3+n4+n5)/5;
}

let ejemplo1 = promedio(5,5,5,5,5);
let ejemplo2 = promedio(4,3,5,3.8,4.2);
let ejemplo3 = promedio(5,4.5,4.1,3,4.9);

console.log(ejemplo1,ejemplo2,ejemplo3);