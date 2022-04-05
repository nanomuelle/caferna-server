const { TILE_NAME } = require('../../constants');
const { ForestTile } = require('./forest-tile');

exports.ForestLargePastureTile = class extends ForestTile {
    constructor(player) {
        super(player, TILE_NAME.P);
        // TODO: inner farm animals capacity = 2
    }

    get points() {
        return 4;
    }
}