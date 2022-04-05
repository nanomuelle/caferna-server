const { TILE_NAME } = require('../../constants');
const { MountainTile } = require('./mountain-tile');

exports.MountainOreMineTile = class extends MountainTile {
    constructor(player) {
        super(player, TILE_NAME.O);
    }

    get points() {
        return 3;
    }
}