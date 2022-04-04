const TILE_NAME = {
    // forest tiles
    x: 'x', // 'Outer forest',
    F: 'F', // 'Forest',
    E: 'E', // 'Cavern entry',
    m: 'm', // 'Meadow',
    f: 'f', // 'Field',
    b: 'b', // 'Forest with 1 boar',
    r: 'r', // 'River (1 food)',
    p: 'p', // 'Little Pasture',
    P: 'P', // 'Big Pasture'

    // mountain tiles
    X: 'X', // 'Outer mountain',
    M: 'M', // 'Mountain',
    C: 'C', // 'Cavern',
    T: 'T', // 'Tunnel',
    D: 'D', // 'Deep Tunnel',
    O: 'O', // 'Ore Mine',
    R: 'R', // 'Ruby Mine',
    l: 'l', // Small Lake (1 food)
    L: 'L', // Big lake (2 foods)
    I: 'I', // 'Initial Dwelling'

    // TODO Furnish Tiles 
};

const FURNISH_TILES = [
    // TODO ...
];

const FOREST_TILE_NAMES = [
    TILE_NAME.x,
    TILE_NAME.F,
    TILE_NAME.E,
    TILE_NAME.m,
    TILE_NAME.f,
    TILE_NAME.b,
    TILE_NAME.r,
    TILE_NAME.p,
    TILE_NAME.P,
];

const MOUNTAIN_TILE_NAMES = [
    TILE_NAME.X,
    TILE_NAME.M,
    TILE_NAME.C,
    TILE_NAME.T,
    TILE_NAME.D,
    TILE_NAME.O,
    TILE_NAME.R,
    TILE_NAME.l,
    TILE_NAME.L,
    TILE_NAME.I,
];

exports.TILE_NAME = TILE_NAME;
exports.Tile = class {
    constructor(name) {
        this.name = name;
        // this.cell = -1;

        // this.tweenCell = -1; // Only for Big Pastures
    }

    get isForest() {
        return FOREST_TILE_NAMES.includes(this.name);
    }

    get isMountain() {
        return MOUNTAIN_TILE_NAMES.includes(this.name);
    }
};
