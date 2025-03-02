// Crear un objeto literal persona con las siguientes propiedades: nombre, apellido.
// Asignar a las propiedades tus datos.
// Utilizar for in para recorrer las propiedades y mostrarlas en pantalla.
// Una vez que el código corre y hace lo pedido agregar un método saludar que muestre el siguiente mensaje Hola ${tu nombre} ${tu apellido}.
// Dentro del iterador comprobar el tipo de dato y ejecutarlo en caso de que sea una función.
// Agregar otras propiedades que creas describen a una persona y al menos 2 métodos más.

const persona = {
    nombre: 'Juan',
    apellido: 'Gallego',
    saludar: function(){
        console.log(`Hola ${this.nombre} ${this.apellido}`);
    },
    trabaja: true,
    casado: false,
    edad: 27,
    esCasado: function(){
        console.log(`Juan ${this.casado ? "es casado": "no es casado"}`);
    }
}

for(const key in persona){
    if(typeof persona[key]  !== 'function'){
        console.log(`${key} : ${persona[key]}`);
    } else{
        console.log(persona[key]());
        //Justo después de esta ejecución me aparece un undefined, no entiendo el porqué
    }
}