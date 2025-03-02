//Ejemplo 1
console.log(numero1); //undefined
var numero1 = 10;

//Ejemplo 2
saludar(); //Hola Mundo!

function saludar() {
  console.log("Hola Mundo!");
}

//Ejemplo 3
try{
    console.log(numero2); //Esto tira error
} catch(error){
    console.log(error.message);
};
let numero2 = 20;

//Ejemplo 4
function prueba() {
    console.log(numero3);
    var numero3 = 5;
    console.log(numero3);
}
  
prueba(); //Primero undefined y luego 5

//Ejemplo 5
saludar(); // Hola mundo

var saludar = function () {
    console.log("Hola Mundo!");
};

//Ejemplo 6
{
    console.log(numero4); //Esto tira error
    let numero4 = 15;
  }
