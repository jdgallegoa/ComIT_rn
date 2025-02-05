function mostrarLinea(caracter, cantidad) {
    const texto = caracter.repeat(cantidad);
    console.log(texto);
  }
  
  function obtenerFuncionTemplate(caracter = "*") {
    return (texto) => {
      const cantidadMaximaCaracteres = texto.length + 4;
  
      mostrarLinea(caracter, cantidadMaximaCaracteres);
      console.log(`${caracter} ${texto} ${caracter}`);
      mostrarLinea(caracter, cantidadMaximaCaracteres);
    };
  }
  
  obtenerFuncionTemplate()("Juan");