const { AbstractAction } = require('./abstract-action.js');

exports.GoodsAction = class extends AbstractAction {
    constructor() {
        super('goods-action');
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

    use(dwarf, actionParams) {
        console.log('goods-action', dwarf.id, actionParams);

        super.use(dwarf, actionParams);
        const { player } = dwarf;
        if (this.goods) {
            this.goods.forEach(good => player.addGood(good.obtainStock()));
        }
    }
}
