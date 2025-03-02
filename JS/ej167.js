// Crea una función mostrarUsuario.
// Dentro de la función crea una variable con el nombre usuario y asigna el valor {nombre: valor} donde valor es tu nombre.
// Al ejecutar la función debe mostrar el contenido de la variable usuario.
// Llamar a la función mostrarUsuario.
// Desde el scope global intenta mostrar el contenido de la variable usuario definido en la función mostrarUsuario.
// Intenta definiendo la variable usuario con var, let & const

function mostrarUsuario(){
    var usuario = {nombre: 'Juan'};
    console.log(usuario);
};

mostrarUsuario();
console.log(usuario);