// Sin mirar el contenido del curso y con tus propias palabras intenta enteder a quién hace referencia this en este contexto:

const persona = {
  nombre: "Nicolas",
  saludar: function () {
    console.log(this);
    // console.log(this.nombre);
  },
  saludar2: () => {
    console.log(this);
  },
};

// Qué diferencia hay si utilizamos arrow function en lugar de functions?
// Escribir utilizando los comentarios de JavaScript lo que creas que hace referencia this.

persona.saludar();
// En este caso el this, en una función normal, hace referencia a la función
persona.saludar2();
// En este hace referencia al objeto global