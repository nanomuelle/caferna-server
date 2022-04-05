const { GOODS } = require('../constants');

exports.Cell = class {
    constructor() {
        this.tile = undefined;
        this[GOODS.DOG] = 0;
        this[GOODS.SHEEP] = 0;
    }

    placeTile(tile) {
        // TODO: LOGIC TO VALIDATE
        this.tile = tile;
    }

    placeAnimal(animalId) {
        this[animalId] += 1;
    }

    get animalsToAscii() {
        const dogs = 'd'.repeat(this[GOODS.DOG]);
        const sheep = 's'.repeat(this[GOODS.SHEEP]);
        return `${ dogs }${ sheep }`;
    }

    toAscii() {
        return ` ${ this.tile.name }${ this.animalsToAscii.padEnd(3, ' ') } `;
    }
}