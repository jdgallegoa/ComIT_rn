function saludar(mensaje, despedida){
    console.log(mensaje);
    despedida();
};

const despedir = function(){
    console.log('Adios');
};

saludar('Bienvenidos a JavaScript', despedir);