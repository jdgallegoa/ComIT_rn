// Copiar y pegar el código del ejercicio 125
// Recorrer la lista de gustos de helados y mostrarlos en consola uno a uno utilizando console.log()
// De inicio a fin
// De fin a inicio

const helados = [];
helados.push('vainilla', 'maracuya', 'frutos rojos', 'chocolate', 'vainilla chips', 'café', 'tiramisu', 'arequipe', 'limon', 'ron con pasas');

for(let i = 0; i<=helados.length-1;i++){
    console.log(helados[i]);
}
for (let i = helados.length-1;i>=0;i--){
    console.log(helados[i]);
}
