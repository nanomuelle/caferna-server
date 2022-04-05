const { TILE_NAME } = require('../../constants');
const { Tile } = require('../tile');

exports.MountainTile = class extends Tile {
    constructor(player, name) {
        super(player, name || TILE_NAME.M);
    }

    get points() {
        return -1;
    }
}