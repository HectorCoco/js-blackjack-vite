import _ from 'underscore';
/**
 * Esta funcion crea un nuevo Deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['A', 'J', 'Q', 'K']
 * @param {Array<String>} tiposEspeciales Ejemplo ['C', 'D', 'H', 'S']
 * @returns {Array<String>} retorna un nuevo deck revueto
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    //Validaciones
    if (!tiposDeCarta || tiposDeCarta.length <= 0)
        throw new Error('tiposDeCarta es obligatorio como un arreglo de strings');
    if (!tiposEspeciales || tiposEspeciales.length <= 0)
        throw new Error('tiposEspeciles es obligatorio como un arreglo de strings');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tiposDeCarta) {
        for (const esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    return _.shuffle(deck);
}
