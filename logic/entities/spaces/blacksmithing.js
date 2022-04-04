const { ExpeditionAction } = require('../../actions/expedition-action.js');
const { ForgeAction } = require('../../actions/forge-action.js');
const { NEXUS } = require('../../constants.js');
const { Space } = require('./space.js');

exports.Blacksmithing = class extends Space {
    constructor() {
        super('blacksmithing', 'Blacksmithing', NEXUS.AND_THEN_OR);

        const action1 = new ForgeAction();
        const action2 = new ExpeditionAction(3);

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
