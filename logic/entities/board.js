const { GOODS } = require('../constants');
const { TileFactory } = require('../tile-factory');

const BOARD_WIDTH = 4;
const BOARD_HEIGHT = 6;

exports.Board = class {
    constructor(player, initialConfiguration) {
        this.player = player;
        this.tiles = Array.from(
            Array(BOARD_WIDTH * BOARD_HEIGHT),
            () => {}
        );
        initialConfiguration.forEach(
            (tileName, index) => {
                const tile = TileFactory.create(player, tileName);
                this.placeTile(tile, index)
            }
        );
    }

    placeTile(tile, index) {
        console.log("Board.placeTile", tile.name, index);
        // TODO: implement logic to avoid illegal moves
        // TODO: some index has goods to the player... boar, food, ...
        this.tiles[index] = tile;
    }

    placeAnimal(animalId, index) {
        console.log("Board.placeAnimal", animalId, index);
        this.tiles[index].placeAnimal(animalId);
    }

    numberOfAnimals(animalId) {
        return this.tiles.reduce(
            (acc, tile) => acc + tile.numberOfAnimals(animalId), 0
        );
    }

    serialize() {
        return ({
            playerId: this.player.id,
            tiles: this.tiles
        });
    }

    toAscii() {
        return this.tiles
            .map(tile => tile.toAscii())
            .reduce((acc, asciiOfTile, index) => {
                if (index % BOARD_WIDTH === 0) {
                    return [...acc, '\n', asciiOfTile];
                }
                return [...acc, asciiOfTile];
            }, [])
            .join('');
    }
}
