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

    executeActions(dwarf, spaceParams) {
        console.log('Space.executeActions', dwarf.id, spaceParams);
        spaceParams.forEach(
            ({index, actionParams}) => {
                const action = this.actions[index];
                console.log('  using action', action.name, actionParams);
                action.use(dwarf, actionParams)
            }
        )
    }

    use(dwarf, spaceParams) {
        console.log('Space.use', dwarf.id, spaceParams);
        this.dwarf = dwarf;
        this.executeActions(this.dwarf, spaceParams);
    }

    replenish() {
        this.actions.forEach(action => {
            if (action.replenish) {
                action.replenish();
            }
        });
    }
}
