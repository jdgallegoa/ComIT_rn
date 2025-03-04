function sumar(number1: string | number, number2: string | number) {
  try {
    const valor1 = typeof number1 === "string" ? parseInt(number1) : number1;
    const valor2 = typeof number2 === "string" ? parseInt(number2) : number2;
    const resultado = valor1 + valor2;

    if (isNaN(resultado)) {
      throw new Error("No se pueden sumar los valores pasados por parámetro");
    }

    console.log(
      `El resultado de sumar ${number1} y ${number2} es ${resultado}`
    );
  } catch (error) {
    console.log("error");
  }
}

sumar(4, 10);
sumar("4", "10");
sumar("Nico", "10");