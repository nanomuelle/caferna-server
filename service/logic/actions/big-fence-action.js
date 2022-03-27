const { AbstractAction } = require('./abstract-action.js');

exports.BigFenceAction = class extends AbstractAction {
    use(dwarf, params) {
        super.use(dwarf);

        console.log('TODO - big fence action', params);
    }
}
