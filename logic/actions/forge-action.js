const { AbstractAction } = require('./abstract-action.js');

exports.ForgeAction = class extends AbstractAction {
    constructor() {
        super();
        this.furnishing = null;
    }

    use(dwarf, params) {
        super.use(dwarf);

        console.log('TODO - forge action', params);
    }
}
