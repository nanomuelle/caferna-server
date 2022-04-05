const { TILE_NAME } = require('../constants.js');
const { Board } = require('./board.js');

const INITIAL_FOREST_CONFIGURATION = [
    TILE_NAME.x, TILE_NAME.x, TILE_NAME.x, TILE_NAME.x, 
    TILE_NAME.x, TILE_NAME.F, TILE_NAME.F, TILE_NAME.F,
    TILE_NAME.x, TILE_NAME.F, TILE_NAME.F, TILE_NAME.F,
    TILE_NAME.x, TILE_NAME.F, TILE_NAME.F, TILE_NAME.F,
    TILE_NAME.x, TILE_NAME.F, TILE_NAME.F, TILE_NAME.F,
    TILE_NAME.x, TILE_NAME.x, TILE_NAME.x, TILE_NAME.x,
];

exports.Forest = class extends Board{
    constructor(player) {
        super(player, INITIAL_FOREST_CONFIGURATION);
    }

    placeStable(cellIndex) {
        this.tiles[cellIndex].placeStable();
    }

    sow({crop, cell}) {
        console.log('Forest.sow', crop, cell);
        this.tiles[cell].sow(crop);
    }
}
