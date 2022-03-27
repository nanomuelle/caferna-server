const { GOODS } = require('../constants.js');
const { FixedGood } = require('./fixed-good.js');
const { StockableGood } = require('./stockable-good.js');

exports.SustenanceVeggyGood = class extends StockableGood {
    constructor(grainGood) {
        super(GOODS.VEGGY, 0, 1);
        this.grainGood = grainGood;
    }

    replenish() {
        if (this.grainGood.stock === 1) {
            this._stock += this.replenishStock;
        }
    }

    obtainStock() {
        const good = new FixedGood(this.name, this._stock);
        this._stock = 0;
        return good;
    }
}
