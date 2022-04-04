const { FixedGood } = require ('../fixed-good.js');
const { NEXUS, GOODS } = require ('../../constants.js');
const { Space } = require ('./space.js');
const { GoodsAction } = require ('../../actions/goods-action.js');
const { SustenanceAction } = require ('../../actions/sustenance-action.js');

exports.Sustenance = class extends Space {
    constructor() {
        super('sustenance', 'Sustenance', NEXUS.AND_OR);

        const action1 = new SustenanceAction();
        const action2 = new GoodsAction();
        action2.goods.push(new FixedGood(GOODS.MEADOW_FIELD, 1));

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
