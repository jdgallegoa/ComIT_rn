// Declarar un objeto usuario con las siguientes propiedades y métodos
// propiedad: username, valor: null
// propiedad: password, valor: null
// método: saludar
// método: updatePassword
// método: updaterUsername

// El método saludar muestra un mensaje de saludo:
// Este método muestra en consola el siguiente saludo: Hola, soy el usuario ${username}, Si el objeto tiene la propiedad username con un valor que no sea null
// Sino muestra un mensaje de error: Este usuario no tiene username

// El método updaterUsername acepta un parámetro con el nombre del usuario y asigna este valor a la propiedad username
// El método updatePassword acepta un parámetro con el nombre del usuario y asigna este valor a la propiedad password

// Mostrar en consola:
// Hacer update de la propiedad username del objeto usuario usando el método
// Hacer update de la propiedad password del objeto usuario usando el método
// Llamar al método saludo del objeto usuario
// Imprimir el password del usuario en consola

const usuario = {
    username: null,
    password: null,
    saludar: function(){
        if(this.username !== null){
            console.log(`Hola, soy el usuario ${this.username}`);
        } else{
            console.log('Este usuario no tiene username');
        }
    },
    updateUserName: function(username){
        this.username = username;
    },
    updatePassword: function(password){
        this.password = password;
    }
};

usuario.saludar();
usuario.updateUserName('juancho');
usuario.updatePassword('12345');
usuario.saludar();
console.log(usuario.password);