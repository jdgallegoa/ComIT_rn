// Explica con tus propias palabras como funciona this dentro de las funciones.

function saludar() {
  console.log(this);
}

saludar()
//En este caso, el this hace referencia al objeto global


// Escribir utilizando los comentarios de JavaScript lo que creas que hace referencia this.
// También explicar cómo funcionan las funciones call, apply y bind y que diferencias tienen.

//Las diferencias entre las funciones es en el modo en que se pasan los parámetros de la función