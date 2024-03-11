
import _ from 'underscore';
import { crearDeck, pedirCarta, crearCarta, acumularPuntos, turnoComputadora } from "./usecases/index";


const moduloBlackJack = (() => {
    'use strict'

    let deck = [];
    const especiales = ['A', 'J', 'Q', 'K'],
        tipos = ['C', 'D', 'H', 'S'];

    let puntosJugadores = [];

    /**
     **|----------------Referencias del html----------------|
    */
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');

    /**
     * The function `inicializarJuego` initializes a card game for a specified number of players by
     * creating a deck, setting player points to zero, and enabling game buttons.
     * @param [numeroJugadores=2] - The `numeroJugadores` parameter in the `inicializarJuego` function
     * represents the number of players in the game. By default, it is set to 2 players, but you can
     * provide a different number of players when calling the function.
     */
    const inicializarJuego = (numeroJugadores = 2) => {
        console.clear();
        deck = crearDeck(tipos, especiales);
        puntosJugadores = [];
        for (let j = 0; j < numeroJugadores; j++) {
            puntosJugadores.push(0);
        }
        puntosHTML.forEach(element => element.innerText = 0);
        divCartasJugadores.forEach(element => element.innerText = '');
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    /**
     **|--------------------------Eventos-----------------------------|
     */
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta(deck);
        const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);
        crearCarta(carta, 0, divCartasJugadores);

        if (puntosJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(deck, puntosJugador, puntosJugadores, puntosHTML, divCartasJugadores);
        } else if (puntosJugador === 21) {
            console.info('Has consegido 21');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(deck, puntosJugador, puntosJugadores, puntosHTML, divCartasJugadores);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(deck, puntosJugadores[0], puntosJugadores, puntosHTML, divCartasJugadores);
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    };

})();

// (function () {
// })();