exports.FixedGood = class {
    constructor(name, stock) {
        this.name = name;
        this._stock = stock;
    }

    get stock() {
        return this._stock;
    }

    obtainStock() {
        console.log('FixedGood.obtainStock', this.name, this.stock);
        return ({
            name: this.name,
            stock: this.stock
        });
    }
}
