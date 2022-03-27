const { AbstractAction } = require('./abstract-action.js');

exports.GoodsAction = class extends AbstractAction {
    constructor() {
        super();
        this.goods = [];
    }

    replenish() {
        super.replenish();

        this.goods.forEach(good => {
            if (good.replenish) {
                good.replenish();
            }
        });
    }

    use(dwarf, params) {
        super.use(dwarf);

        const { player } = dwarf;
        if (this.goods) {
            this.goods.forEach(good => player.addGood(good.obtainStock()));
        }
    }
}
