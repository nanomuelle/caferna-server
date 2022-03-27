const { AbstractAction } = require('./abstract-action.js');

exports.StableAction = class extends AbstractAction {
    use(dwarf, params) {
        super.use(dwarf);

        console.log('TODO - stable action', params);
    }
}
