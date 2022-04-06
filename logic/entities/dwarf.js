exports.Dwarf = class {
    static get STATE() {
        return ({
            NEW_BORN: 'new-born',
            ADULT: 'adult',
        });
    }

    constructor(player, id) {
        this.player = player;

        this.id = id;
        this.weapon = 0;
        this.state = this.constructor.STATE.NEW_BORN;
    }

    increaseWeapon() {
        this.weapon += 1;
    }

    toAscii() {
        const dwarfSpace = dwarfId => {
            const space = this.player.game.spaceManager.getSpaceByDwarfId(dwarfId);
            return space ? `: ${ space.name }` : ': ';
        };

        if (this.state === this.constructor.STATE.NEW_BORN) {
            return `${ this.id }*`;
        }

        return `${ this.id }[${ this.weapon }]${ dwarfSpace(this.id) }`
    }
}
