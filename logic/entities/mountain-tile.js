exports.MOUNTAIN_TILE_NAME = {
    x: 'mx', // 'Outer mountain',
    M: 'mM', // 'Mountain',
    C: 'mC', // 'Cavern',
    T: 'mT', // 'Tunnel',
    D: 'mD', // 'Deep Tunnel',
    O: 'mO', // 'Ore Mine',
    R: 'mR', // 'Ruby Mine',
    F: 'mF', // 'Two foods',
    I: 'mI', // 'Initial Dwelling'
}

exports.MountainTile = class {
    constructor(name) {
        this.name = name;
        this.cell;
    }
}
