const contador = (function (acumulador) {
    return {
      increment: function () {acumulador += 1},
      getCount: function () {console.log(acumulador)},
      decrement: function() {acumulador-=1},
      reset: function() {acumulador=0},
    };
  })(0);
  
contador.increment(); // Incrementa en 1
contador.getCount(); // Muestra 1 en pantalla
contador.increment(); // Incrementa en 1
contador.getCount(); // Muestra 2 en pantalla

contador.decrement();
contador.getCount();
contador.reset();
contador.getCount();