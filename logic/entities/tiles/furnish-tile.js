const { Tile } = require('../tile');

exports.FurnishTile = class extends Tile {
    constructor(player, name) {
        super(player, name);
    }
}