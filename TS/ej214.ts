interface Vehiculo {
    marca: string;
    modelo: string;
    color: string;
    cantidadDePasajeros: number;
};

interface Auto extends Vehiculo{
    esDescapotable: boolean;
};

interface Camion extends Vehiculo{
    cantidadDeAcoplados: number;
};

function mostrarAutoOCamion(vehiculo: Auto|Camion){
    console.log(`Marca: ${vehiculo.marca}`);
    console.log(`Modelo: ${vehiculo.modelo}`);
    console.log(`Color: ${vehiculo.color}`);
    console.log(`Cantidad de Pasajeros: ${vehiculo.cantidadDePasajeros}`);
    if ("esDescapotable" in vehiculo) {
        console.log(`Es descapotable: ${vehiculo.esDescapotable}`);
      } else {
        console.log(`Cantidad de acoplados: ${vehiculo.cantidadDeAcoplados}`);
      }
}

function mostrarAutoOCamion2(Vehiculo: Auto|Camion){
    const keys = Object.keys(Vehiculo);
    keys.forEach((vehiculo)=>{
        console.log(`${vehiculo}: ${Vehiculo[vehiculo]}`)
    });
};

const auto: Auto = {
    marca: "Honda",
    modelo: "Civic",
    color: "Negro",
    cantidadDePasajeros: 5,
    esDescapotable: true,
};

const camion: Camion = {
    marca: "Volvo",
    modelo: "FH16",
    color: "Rojo",
    cantidadDePasajeros: 3,
    cantidadDeAcoplados: 2,
  };

mostrarAutoOCamion(auto);
mostrarAutoOCamion2(camion);