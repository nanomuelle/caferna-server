const { GOODS } = require('../constants.js');
const { FixedGood } = require('../entities/fixed-good.js');
const { StockableGood } = require('../entities/stockable-good.js');
const { GoodsAction } = require('./goods-action.js');

const EXTRA_RUBY = 1;
exports.RubyMiningAction = class extends GoodsAction {
    constructor() {
        super();

        this.goods.push(new StockableGood(GOODS.RUBY, 1, 1));
    }

    use(dwarf) {
        super.use(dwarf);

        const { player } = dwarf;
        if (player.numOfRubyMines > 0) {
            player.addGood(new FixedGood(GOODS.RUBY, EXTRA_RUBY));
        }
    }
}
