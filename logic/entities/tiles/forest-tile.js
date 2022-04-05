const { TILE_NAME } = require('../../constants');
const { Tile } = require('../tile');

class ForestTile extends Tile {
    constructor(player, name) {
        super(player, name || TILE_NAME.F);
    }

    get points() {
        return -1;
    }
}

exports.ForestTile = ForestTile;