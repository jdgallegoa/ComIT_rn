// Crear la función obtenerPerimetroRectangulo que acepta 2 parámetros base y altura
// Si la base y altura son iguales calcular el perímetro de un cuadrado
// Si la base y altura son distintas calcular el perímetro de un rectángulo
// La función retorna el perímetro
// Mostrar en consola un mensaje del tipo: El perímetro es ${perimetro}
// Si el perímetro es mayor a 100 entonces:
// Mostrar el siguiente mensaje en consola: El perímetro es muy grande
// Sino
// Mostrar el siguiente mensaje en consola: Este perímetro no es muy grande
// Ejecutar y validar esta función con distintos valores numéricos

function obtenerPerimetroRectangulo(base,altura){
    let perimetro = base*2+altura*2;
    console.log(`El perímetro es ${perimetro}`);
    if(perimetro>100){
        console.log('El perímetro es muy grande');
    } else{
        console.log('Este perímetro no es muy grande');
    }
}

obtenerPerimetroRectangulo(5,10);
obtenerPerimetroRectangulo(50,30);