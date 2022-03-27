const { Space } = require('./abstract-space.js');
const { RubyMiningAction } = require('../../actions/ruby-mining-action.js');

exports.RubyMining = class extends Space {
    constructor() {
        super('ruby-mining', 'Ruby mining');

        const action1 = new RubyMiningAction();
        this.actions.push(action1);
    }
}
