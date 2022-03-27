const { GOODS } = require('../constants.js');
const { StockableGood } = require('../entities/stockable-good.js');
const { SustenanceVeggyGood } = require('../entities/sustenance-veggy-good.js');
const { GoodsAction } = require('./goods-action.js');

exports.SustenanceAction = class extends GoodsAction {
    constructor() {
        super(GOODS.VEGGY, 0, 1);
        const grainGood = new StockableGood(GOODS.GRAIN, 1, 0);
        const veggyGood = new SustenanceVeggyGood(grainGood);

        this.goods.push(grainGood);
        this.goods.push(veggyGood);
    }
}
