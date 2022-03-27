const { AbstractAction } = require('./abstract-action.js');

exports.NexusAndOrAction = class extends AbstractAction {
    constructor() {
        super();
        this.actions = [];
    }

    addAction(action) {
        this.actions.push(action);
    }

    replenish() {
        this.actions.forEach(action => action.replenish());
    }

    use(dwarf, params = { useActions: [], paramActions: [] }) {
        super.use(dwarf);
        const { useActions, paramActions } = params;
        useActions.forEach((useAction, index) => {
            if (useAction) {
                this.actions[index](dwarf, paramActions[index]);
            }
        });
    }
}
