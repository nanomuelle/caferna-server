const { AbstractAction } = require('./abstract-action.js');

exports.FurnishDwellingAction = class extends AbstractAction {
    constructor() {
        super();
        this.furnishing = null;
    }

    use(dwarf, params) {
        super.use(dwarf);

        console.log('TODO - furnish dwelling action', params);
    }
}
