// Crear un documento con el nombre ej34.js
// Declarar 3 variables con los siguientes nombres: ingresos, ganancias, impuestos
// Asignar los siguientes valores a cada variable según corresponda:
// ingresos: asignar el valor 1000
// ganancias: asignar el valor 600
// impuestos: asignar el valor 500

const ingresos = 1000;
const ganancias = 600;
const impuestos = 500;

// Este mes se esperan los siguientes objetivos:
// Generar al menos 800 pesos o más de ingreso
// Gastar menos de 400 pesos de impuestos
// Se Paga bono si se ganan 600 pesos de ganancias justo
// Mostrar en consola los siguientes mensajes utilizando los operadores esperados:
// Objetivo de ingresos: true o false
// Utilizar el operador mayor o igual que
// Objetivo de impuestos: true o false
// Utilizar el operador menor que
// Bono de ganancias: true o false
// Utilizar el operador de comparación simple

console.log(`¿Se logro el objetivo de ingresos? ${ingresos>=800}`)
console.log(`¿Se logro el objetivo de impuestos? ${impuestos<400}`)
console.log(`¿Se paga bono de ganancias? ${ganancias==600}`)