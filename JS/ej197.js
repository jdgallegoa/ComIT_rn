const vehiculo = {
  marca: "Toyota",
  modelo: "Rav4",
  cantidadDePuertas: 4,
  anio: 2024,
  color: "black",
  toString: function () {
    console.log(`${this.marca} ${this.modelo} ${this.anio}`);
  },
  getColor: function () {
    return this.color;
  },
};

const vehiculo2 = Object.create(vehiculo);
[vehiculo2.marca, vehiculo2.modelo, vehiculo2.cantidadDePuertas, vehiculo2.anio, vehiculo2.color] = ['Honda', 'Pilot', 4, 2025, 'Dark Blue'];

vehiculo2.toString();
console.log(vehiculo2.getColor());