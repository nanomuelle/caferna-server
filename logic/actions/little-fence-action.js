const { AbstractAction } = require('./abstract-action.js');

exports.LittleFenceAction = class extends AbstractAction {
    use(dwarf, params) {
        super.use(dwarf);

        console.log('TODO - little fence action', params);
    }
}
