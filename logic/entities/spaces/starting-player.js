const { StockableGood } = require('../stockable-good.js');
const { FixedGood } = require('../fixed-good.js');
const { GOODS } = require('../../constants.js');
const { Space } = require('./space.js');
const { GoodsAction } = require('../../actions/goods-action.js');
const { InitialPlayerAction } = require('../../actions/initial-player-action.js');

exports.StartingPlayer = class extends Space {
    constructor() {
        super('starting-player', 'Starting Player');

        const action1 = new GoodsAction();
        action1.goods.push(new StockableGood(GOODS.FOOD, 1, 1));
        action1.goods.push(new FixedGood(GOODS.RUBY, 1));

        const action2 = new InitialPlayerAction();

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
