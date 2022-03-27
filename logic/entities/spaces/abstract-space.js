exports.Space = class {
    constructor(id, name, nexus = '') {
        this.id = id;
        this.name = name;
        this.nexus = nexus;
        this.actions = [];
        this.dwarf = null;
    }

    get dwarfId() {
        return this.dwarf ? this.dwarf.id : '';
    }

    replenish() {
        this.actions.forEach(action => {
            if (action.replenish) {
                action.replenish();
            }
        });
    }

    useAction(index, params) {
        console.log("useAction", index, params, this.actions[index]);
        this.actions[index].use(this.dwarf, params);
    }

    use(dwarf, actions = []) {
        this.dwarf = dwarf;
        actions.forEach(
            ({index, params}) => this.useAction(index, params)
        )
    }
}
