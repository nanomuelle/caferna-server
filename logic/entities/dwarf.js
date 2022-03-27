exports.Dwarf = class {
    static get STATE() {
        return ({
            NEW_BORN: 'new-born',
            READY: 'ready',
            USED: 'used'
        });
    }

    constructor(player, id) {
        this.player = player;

        this.id = id;
        this.weapon = 0;
        this.state = this.constructor.STATE.NEW_BORN;
    }
}
