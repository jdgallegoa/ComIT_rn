// Crear la función mejorJugadorArgentino que acepta como parámetro un número
// Esta función retorna el nombre de un jugador según el número de camiseta que utilizó en la selección del 86
// Utilizar la siguiente lista de jugadores: 18 Nery Pumpido 5 José Luis Brown 9 José Cuciuffo 19 Óscar Ruggeri 14 Ricardo Giusti 16 Julio Olarticoechea 2 Sergio Batista 12 Héctor Enrique 7 Jorge Burruchaga 10 Diego Armando Maradona 11 Jorge Valdano
// En caso de que se ingrese un número que no corresponde a un jugardor retornar el siguiente valor: Carlos Bilardo
// Mostrar en consola el número pasado como parámetro y el nombre del jugador retornado
// ejemplo: Si pasamos 10 como parámetro obtenemos Diego Armando Maradona como valor de retorno. Mostrar en consola: 10, Diego Armando Maradona

function mejorJugadorArgentino(dorsal){
    let jugador = '';
    if(typeof dorsal !== 'number'){
        console.log('Ingrese un número');
        return;
    }
    switch(dorsal){
        case 18:
            jugador = 'Nery Pumpido';
            break;
        case 5:
            jugador = 'José Luis Brown';
            break;
        case 9:
            jugador = 'José Cuciuffo';
            break;
        case 19:
            jugador = 'Óscar Ruggeri';
            break;
        case 14:
            jugador = 'Ricardo Giusti';
            break;
        case 16:
            jugador = 'Julio Olarticoechea';
            break;
        case 2:
            jugador = 'Sergio Batista';
            break;
        case 12:
            jugador = 'Héctor Enrique';
            break;
        case 7:
            jugador = 'Jorge Burruchaga';
            break;
        case 10:
            jugador = 'Diego Armando Maradona';
            break;
        case 11:
            jugador = 'Jorge Valdano';
            break;
        default:
            jugador = 'Carlos Bilardo';
            break;
    }
    console.log(`${dorsal}, ${jugador}`);
}

mejorJugadorArgentino(7);
mejorJugadorArgentino(10);
mejorJugadorArgentino(99);
mejorJugadorArgentino('Messi');