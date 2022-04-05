const { TILE_NAME } = require('../../constants');
const { MountainTile } = require('./mountain-tile');

exports.MountainOuterTile = class extends MountainTile {
    constructor(player) {
        super(player, TILE_NAME.X);
    }
}