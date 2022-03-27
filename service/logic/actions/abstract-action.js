/* eslint-disable class-methods-use-this */
exports.AbstractAction = class {
    constructor() {
        this.dwarf = null;
    }

    replenish() {}

    use(dwarf) {
        this.dwarf = dwarf;
    }
}
