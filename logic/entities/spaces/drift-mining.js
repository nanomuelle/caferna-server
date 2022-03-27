const { StockableGood } = require('../stockable-good.js');
const { NEXUS, GOODS } = require('../../constants.js');
const { Space } = require('./abstract-space.js');
const { GoodsAction } = require('../../actions/goods-action.js');
const { MountainTweenTileAction } = require('../../actions/mountain-tween-tile-action.js');

exports.DriftMining = class extends Space {
    constructor() {
        super('drift-mining', 'Drift mining', NEXUS.AND_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new StockableGood(GOODS.STONE, 2, 2));

        const action2 = new MountainTweenTileAction('CT');

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
