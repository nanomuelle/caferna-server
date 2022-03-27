exports.FOREST_TILE_NAME = {
    x: 'x', // 'Outer forest',
    F: 'F', // 'Forest',
    E: 'E', // 'Cavern entry',
    m: 'm', // 'Meadow',
    _: '_', // 'Field',
    b: 'b', // 'Forest with 1 boar',
    f: 'f', // 'Forest with 1 food',
    p: 'p', // 'Little Pasture',
    P: 'P', // 'Big Pasture'
}

exports.ForestTile = class {
    constructor(name) {
        this.class = name;
        this.cell = -1;

        this.tweenCell = -1; // Only for Big Pastures
    }
}
