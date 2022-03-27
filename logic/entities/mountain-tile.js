exports.MOUNTAIN_TILE_NAME = {
    x: 'x', // 'Outer mountain',
    M: 'M', // 'Mountain',
    C: 'C', // 'Cavern',
    T: 'T', // 'Tunnel',
    D: 'D', // 'Deep Tunnel',
    O: 'O', // 'Ore Mine',
    R: 'R', // 'Ruby Mine',
    F: 'F', // 'Two foods',
    I: 'I', // 'Initial Dwelling'
}

exports.MountainTile = class {
    constructor(name) {
        this.name = name;
        this.cell;
    }
}
