const jugador = {
    nombre: null,
    energia: 100,
    vidas: 3,
    perderEnergia: function(danio){
        if(this.energia-danio<=0){
            this.perderVida();
            this.mensaje();
        } else{
            this.energia -= danio;
            this.mensaje();
        };
    },
    recuperarEnergia: function(energiaRecuperada){
        if(this.energia+energiaRecuperada>100){
            this.energia = 100;
            this.mensaje();
        } else{
            this.energia += energiaRecuperada;
            this.mensaje();
        };
    },
    perderVida: function(){
        if(this.vidas<=0){
            console.log('Vidas mínimas, no se resta ninguna');
            this.mensaje();
        } else{
            this.vidas -= 1;
            this.energia = 100;
            this.mensaje();
        };
    },
    recuperarVida: function(){
        if(this.vidas>=99){
            console.log('Vidas máximas');
            this.mensaje();
        } else{
            this.vidas += 1;
            this.mensaje();
        };
    },
    mensaje: function(){
        console.log(`El jugador ${this.nombre} tiene ${this.energia}% de energía y ${this.vidas} vidas`);
    }
};

jugador.nombre = 'juancho';

jugador.perderVida();
jugador.perderEnergia(10);
jugador.perderEnergia(5);
jugador.perderEnergia(15);
jugador.perderEnergia(20);
jugador.recuperarEnergia(10);
jugador.perderEnergia(30);
jugador.perderEnergia(40);
jugador.perderVida();
jugador.perderVida();
jugador.recuperarVida();
jugador.recuperarVida();
jugador.recuperarVida();
jugador.perderVida();
