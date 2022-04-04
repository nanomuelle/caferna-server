const { Board } = require('./board.js');
const { Tile, TILE_NAME } = require('./tile.js');

const INITIAL_FOREST_CONFIGURATION = [
    TILE_NAME.x, TILE_NAME.x, TILE_NAME.x, TILE_NAME.x, 
    TILE_NAME.x, TILE_NAME.F, TILE_NAME.F, TILE_NAME.b,
    TILE_NAME.x, TILE_NAME.F, TILE_NAME.F, TILE_NAME.F,
    TILE_NAME.x, TILE_NAME.b, TILE_NAME.F, TILE_NAME.F,
    TILE_NAME.x, TILE_NAME.F, TILE_NAME.r, TILE_NAME.E,
    TILE_NAME.x, TILE_NAME.x, TILE_NAME.x, TILE_NAME.x,
];

exports.Forest = class extends Board{
    constructor(player) {
        super(player, INITIAL_FOREST_CONFIGURATION);
    }
}
