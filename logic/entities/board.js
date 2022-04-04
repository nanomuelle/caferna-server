const { GOODS } = require('../constants');
const { Tile } = require('./tile');

const BOARD_WIDTH = 4;
const BOARD_HEIGHT = 6;

class Cell {
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

exports.Board = class {
    constructor(player, initialConfiguration) {
        this.player = player;
        this.cells = Array.from(
            Array(BOARD_WIDTH * BOARD_HEIGHT),
            () => new Cell()
        );
        initialConfiguration.forEach(
            (tileName, index) => this.placeTile(new Tile(tileName), index)
        );
    }

    placeTile(tile, index) {
        console.log("Board.placeTile", tile, index);
        // TODO: implement logic to avoid illegal moves
        this.cells[index].placeTile(tile);
    }

    placeAnimal(animalId, index) {
        console.log("Board.placeAnimal", animalId, index);
        this.cells[index].placeAnimal(animalId);
    }

    numberOfAnimals(animalId) {
        return this.cells.reduce(
            (acc, cell) => acc + cell[animalId], 0
        );
    }

    serialize() {
        return ({
            playerId: this.player.id,
            cells: this.cells
        });
    }

    toAscii() {
        return this.cells
            .map(cell => cell.toAscii())
            .reduce((acc, asciiOfCell, index) => {
                if (index % BOARD_WIDTH === 0) {
                    return [...acc, '\n', asciiOfCell];
                }
                return [...acc, asciiOfCell];
            }, [])
            .join('');
    }
}
