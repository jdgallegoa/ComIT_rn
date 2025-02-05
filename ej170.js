// Lee el siguiente código eintenta desifrar qué resultado da al ejecutar esta función.
// Como parte del ejercicio escribe lo que pasa.

function contar() {
    let contador = 0;
    return function () {
      contador++;
      console.log(contador);
    };
}
  
const incrementar = contar();
incrementar(); //1
incrementar(); //2
incrementar(); //3
incrementar(); //4