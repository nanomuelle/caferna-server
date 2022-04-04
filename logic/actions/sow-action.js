const { AbstractAction } = require('./abstract-action.js');

exports.SowAction = class extends AbstractAction {
    constructor() {
        super();
    }

    use(dwarf, params) {
        super.use(dwarf);

        console.log('TODO - sow action', params);
    }
}
