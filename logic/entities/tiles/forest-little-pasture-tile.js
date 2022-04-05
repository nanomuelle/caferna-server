const { TILE_NAME } = require('../../constants');
const { ForestTile } = require('./forest-tile');

exports.ForestLittlePastureTile = class extends ForestTile {
    constructor(player) {
        super(player, TILE_NAME.p);
        // TODO: inner farm animals capacity = 2
    }

    get points() {
        return 2;
    }
}