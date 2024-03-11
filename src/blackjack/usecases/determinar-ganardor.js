
import Swal from 'sweetalert2';


export const determinaGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        if (puntosMinimos > 21) {
            Swal.fire("Gana computadora");
        } else if (puntosComputadora > 21) {
            Swal.fire("Gana Jugador");
        } else if (puntosComputadora == puntosMinimos) {
            Swal.fire("Gana computadora");
        } else if (puntosMinimos <= 21 && puntosComputadora > puntosMinimos) {
            Swal.fire("Gana computadora");
        }
    }, 300);
}