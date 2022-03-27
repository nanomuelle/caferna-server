exports.Dwarf = class {
    constructor(player, id, isNewBorn = true) {
        this.player = player;

        this.id = id;
        this.weapon = 0;
        this.isNewBorn = isNewBorn;
    }
}
