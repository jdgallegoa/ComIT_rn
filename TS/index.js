function sumar(number1, number2) {
    try {
        var valor1 = typeof number1 === "string" ? parseInt(number1) : number1;
        var valor2 = typeof number2 === "string" ? parseInt(number2) : number2;
        var resultado = valor1 + valor2;
        if (isNaN(resultado)) {
            throw new Error("No se pueden sumar los valores pasados por parámetro");
        }
        console.log("El resultado de sumar ".concat(number1, " y ").concat(number2, " es ").concat(resultado));
    }
    catch (error) {
        console.log("error");
    }
}
sumar(4, 10);
sumar("4", "10");
sumar("Nico", "10");
