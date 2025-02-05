// Declarar un objeto con el nombre aritmetica y declarar los siguientes métodos
// suma
// resta
// multiplicar
// dividir
// mostrarModulo

// Cada método acepta 2 parámetros numéricos y muestra en consola el resultado de la operación correspondiente
// Validar en cada método que los valores pasados como parámetro sean números

// Mostrar en consola los siguientes resultados utilizando los métodos del objeto aritmetica:
// suma(2, 10)
// resta(10, 5)
// multiplicar(3, 100)
// dividir(40, 2)
// mostrarModulo(20, 2)

const aritmetica = {
    suma: function(n1,n2){
        if(typeof n1 === 'number' && typeof n2 === 'number'){
            console.log(`La suma entre ${n1} y ${n2} es ${n1+n2}`);
        } else{
            console.log('Ingresar valores numericos');
        }
    },
    resta: function(n1,n2){
        if(typeof n1 === 'number' && typeof n2 === 'number'){
            console.log(`La resta entre ${n1} y ${n2} es ${n1-n2}`);
        } else{
            console.log('Ingresar valores numericos');
        }
    },
    multiplicar: function(n1,n2){
        if(typeof n1 === 'number' && typeof n2 === 'number'){
            console.log(`La multiplicacion entre ${n1} y ${n2} es ${n1*n2}`);
        } else{
            console.log('Ingresar valores numericos');
        }
    },
    dividir: function(n1,n2){
        if(typeof n1 === 'number' && typeof n2 === 'number'){
            console.log(`La division entre ${n1} y ${n2} es ${n1/n2}`);
        } else{
            console.log('Ingresar valores numericos');
        }
    },
    mostrarModulo: function(n1,n2){
        if(typeof n1 === 'number' && typeof n2 === 'number'){
            console.log(`El modulo entre ${n1} y ${n2} es ${n1%n2}`);
        } else{
            console.log('Ingresar valores numericos');
        }
    },
};

aritmetica.suma(2, 10);
aritmetica.resta(10, 5);
aritmetica.multiplicar(3, 100);
aritmetica.dividir(40, 2);
aritmetica.mostrarModulo(20, 2);
