const { FurnishDwellingAction } = require('./actions/furnish-dwelling-action.js');
const { Blacksmithing } = require('./entities/spaces/blacksmithing.js');
const { Clearing } = require('./entities/spaces/clearing.js');
const { DriftMining } = require('./entities/spaces/drift-mining.js');
const { Excavation } = require('./entities/spaces/excavation.js');
const { ForestExploration } = require('./entities/spaces/forest-exploration.js');
const { Growth } = require('./entities/spaces/growth.js');
const { Housework } = require('./entities/spaces/housework.js');
const { Imitation } = require('./entities/spaces/imitation.js');
const { Logging } = require('./entities/spaces/logging.js');
const { OreMineConstruction } = require('./entities/spaces/ore-mine-construction.js');
const { OreMine } = require('./entities/spaces/ore-mine.js');
const { RubyMining } = require('./entities/spaces/ruby-mining.js');
const { SheepFarming } = require('./entities/spaces/sheep-farming.js');
const { SlashAndBurn } = require('./entities/spaces/slash-and-burn.js');
const { StartingPlayer } = require('./entities/spaces/starting-player.js');
const { Sustenance } = require('./entities/spaces/sustenance.js');

const randomComparer = () => (Math.random() >= 0.5 ? -1 : 1);

const STAGE_1 = [
    new Blacksmithing(),
    new OreMineConstruction(),
    new SheepFarming(),
];
const STAGE_2 = [];
const STAGE_3 = [];
const STAGE_4 = [];

exports.SpaceManager = class {
    init() {
        this.spaces = [
            new DriftMining(),
            new Imitation(),
            new Logging(),
            new ForestExploration(),
            new Excavation(),
            new Growth(),
            new Clearing(),
            new StartingPlayer(),
            new OreMine(),
            new Sustenance(),
            new RubyMining(),
            new Housework(),
            new SlashAndBurn(),
        ];

        this.nextSpaces = [
            [...STAGE_1].sort(randomComparer),
            [new FurnishDwellingAction()],
            [...STAGE_2].sort(randomComparer),
            [...STAGE_3].sort(randomComparer),
            [...STAGE_4].sort(randomComparer),
        ].flatMap(item => item);
    }

    addNext() {
        this.spaces = [...this.spaces, this.nextSpaces.shift()];
    }

    replenish() {
        this.spaces.forEach(space => space.replenish());
    }

    getById(spaceId) {
        return this.spaces.find(({ id }) => id === spaceId);
    }

    getSpaceByDwarfId(dwarfId) {
        return this.spaces.find(({ dwarf }) => dwarf?.id === dwarfId);
    }
}
