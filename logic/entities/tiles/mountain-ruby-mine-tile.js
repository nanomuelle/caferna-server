const { TILE_NAME } = require('../../constants');
const { MountainTile } = require('./mountain-tile');

exports.MountainRubyMineTile = class extends MountainTile {
    constructor(player) {
        super(player, TILE_NAME.R);
    }

    get points() {
        return 4;
    }
}