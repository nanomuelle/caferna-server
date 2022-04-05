const { Board } = require('./board.js');
const { TILE_NAME } = require('../constants.js');

const INITIAL_MOUNTAIN_CONFIGURATION = [
    TILE_NAME.X, TILE_NAME.X, TILE_NAME.X, TILE_NAME.X,
    TILE_NAME.M, TILE_NAME.M, TILE_NAME.M, TILE_NAME.X,
    TILE_NAME.M, TILE_NAME.M, TILE_NAME.M, TILE_NAME.X,
    TILE_NAME.C, TILE_NAME.M, TILE_NAME.M, TILE_NAME.X,
    TILE_NAME.I, TILE_NAME.M, TILE_NAME.M, TILE_NAME.X,
    TILE_NAME.X, TILE_NAME.X, TILE_NAME.X, TILE_NAME.X
];
exports.Mountain = class extends Board {
    constructor(player) {
        super(player, INITIAL_MOUNTAIN_CONFIGURATION);
    }

    placeStable(cellIndex) {
        this.tiles[cellIndex].hasStable = true;
    }
}
