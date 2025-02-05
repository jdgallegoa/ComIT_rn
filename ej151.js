// El programa tiene que mostrar por consola la frase I am Groot!
// Utilizar un objeto groot
// Definir 2 métodos saludar y hablar
// Ambos métodos deben retornar la frase I am Groot!
// Usar console.log() y los métodos del objeto groot para mostrar en consola el siguiente resultado:
// Saludar: I am Groot!
// Hablar: I am Groot!

const groot = {
    saludar: function(){
        return 'Saludar: I am Groot!';
    },
    hablar: function(){
        return 'Hablar: I am Groot!';
    },
};

console.log(groot.saludar());
console.log(groot.hablar());