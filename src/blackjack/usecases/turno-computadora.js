import { pedirCarta, crearCarta, acumularPuntos, determinaGanador } from "./index"

export const turnoComputadora = (deck, puntosMinimos, puntosJugadores, puntosHTML, divCartasJugadores) => {
    let puntosComputadora = 0;
    const posComputadora = puntosJugadores.length - 1;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, posComputadora, puntosJugadores, puntosHTML);
        crearCarta(carta, posComputadora, divCartasJugadores);

    } while ((puntosComputadora <= puntosMinimos) && puntosMinimos <= 21);
    determinaGanador(puntosJugadores);
}