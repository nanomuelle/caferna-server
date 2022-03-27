const { AbstractAction } = require('./abstract-action.js');

exports.FurnishCavernAction = class extends AbstractAction {
    constructor() {
        super();
        this.furnishing = null;
    }

    use(dwarf, params) {
        super.use(dwarf);

        console.log('TODO - furnish cavern action', params);
    }
}
