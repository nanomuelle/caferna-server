const { TILE_NAME } = require('../../constants');
const { MountainTile } = require('./mountain-tile');

exports.MountainTunnelTile = class extends MountainTile {
    constructor(player) {
        console.log('MountainTunnelTile constructor');
        super(player, TILE_NAME.T);
    }
}