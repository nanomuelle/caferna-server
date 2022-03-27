const { FixedGood } = require('../fixed-good.js');
const { NEXUS, GOODS } = require('../../constants.js');
const { Space } = require('./abstract-space.js');
const { GoodsAction } = require('../../actions/goods-action.js');
const { SowAction } = require('../../actions/sow-action.js');

exports.SlashAndBurn = class extends Space {
    constructor() {
        super('slash-and-burn', 'Slash-and-burn', NEXUS.AND_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new FixedGood(GOODS.MEADOW_FIELD, 1));

        const action2 = new SowAction();

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
