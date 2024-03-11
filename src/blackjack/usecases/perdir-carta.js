
/**
 * 
 * @param {Array<String>} deck Es un arreglo de strings
 * @returns {String} Retorna el string de la ultima posicion del arreglo
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0)
        throw 'No hay cartas en el deck';
    return deck.pop();
}