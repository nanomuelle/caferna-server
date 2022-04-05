const { TILE_NAME } = require('../../constants');
const { MountainTile } = require('./mountain-tile');

exports.MountainDeepTunnelTile = class extends MountainTile {
    constructor(player) {
        super(player, TILE_NAME.D);
    }
}