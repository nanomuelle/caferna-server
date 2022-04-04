/* eslint-disable class-methods-use-this */
exports.AbstractAction = class {
    constructor(name) {
        this.name = name;
        this.dwarf = null;
    }

    replenish() {}
    use(dwarf, actionParams) {}
}
