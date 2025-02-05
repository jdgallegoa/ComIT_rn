// Crear una función con el nombre de saludar.
// Esta función no acepta ningún parámetro.
// Al ejecutar la función debe saludar a todos los nombres que sean pasados.
// Llamar a la función saludar con los siguientes parámetros "Nicolas", "Natalia", "Javier", "Ana".

function saludar(){
    for(let i=0;i<arguments.length;i++){
        console.log(`Hola ${arguments[i]}`);
    }
};

saludar("Nicolas", "Natalia", "Javier", "Ana");