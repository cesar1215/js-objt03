/*Crea un objeto juego con los siguientes metodos y propiedades
Propiedades:
personaje con el valor de bird
poder con el valor de volar
puntos con el valor de 15

Metodos:
incrementarPuntos que incremente juego.punto por 1 y devuelva el valor de juego.puntos
accion que muestre en la consola "Puedo Volar"*/

const juego = {
    personaje: 'Bird',
    poder: 'Volar',
    puntos: 15,
    incrementarPuntos: function(){
        juego.puntos++;
        return juego.puntos;
    },
    accion: function(){
        console.log('Puedo Volar');
    }
}


//impreme en la consola el objeto juego
console.log(juego);

//Imprime en la consola la propiedad poder del objeto juego
console.log(juego.poder);

//Imprime en la consola el metodo accion
console.log(juego.accion);

//Manda a llamar el metodo incrementarPuntos del objeto puntos
juego.incrementarPuntos();

//Imprime en la consola la propiedad puntos del objeto juegos
console.log(juego.puntos);

