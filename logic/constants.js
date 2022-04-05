exports.NEXUS = {
    AND_OR: 'and / or',
    AND_THEN_OR: 'and then / or',
    OR: 'or',
};

exports.GOODS = {
    STONE: 'stone',
    WOOD: 'wood',
    ORE: 'ore',
    RUBY: 'ruby',

    FOOD: 'food',

    GOLD: 'gold',

    GRAIN: 'grain',
    VEGGY: 'veggy',

    DOG: 'dog',

    SHEEP: 'sheep',
    BOAR: 'boar',
    DONKEY: 'donkey',
    COW: 'cow',

    CAVERN_TUNNEL_OR_CAVERN_CAVERN: 'CC/CT',
    CAVERN_CAVERN: 'CC/CT',
    CAVERN_CAVERN: 'CC',
    CAVERN_TUNNEL: 'CT',
    MEADOW_FIELD: 'MF',
    DEEP_TUNNEL_ORE_MINE: 'DO',
    RUBY_MINE: 'R',
    CAVERN: 'C',
    TUNNEL: 'T',
    MEADOW: 'M',
    FIELD: 'F',

    NEW_BORN: 'new born',
};

exports.TILE_NAME = {
    // forest tiles
    x: 'x', // 'Outer forest',
    F: 'F', // 'Forest',
    // E: 'E', // 'Cavern entry',
    m: 'm', // 'Meadow',
    f: 'f', // 'Field',
    // b: 'b', // 'Forest with 1 boar',
    // r: 'r', // 'River (1 food)',
    p: 'p', // 'Little Pasture',
    P: 'P', // 'Large Pasture'

    // mountain tiles
    X: 'X', // 'Outer mountain',
    M: 'M', // 'Mountain',
    C: 'C', // 'Cavern',
    T: 'T', // 'Tunnel',
    D: 'D', // 'Deep Tunnel',
    O: 'O', // 'Ore Mine',
    R: 'R', // 'Ruby Mine',
    // l: 'l', // Small Lake (1 food)
    // L: 'L', // Big lake (2 foods)
    I: 'I', // 'Initial Dwelling'

    // furnish tiles to grow family
    DWELLING: 'Dwelling',                       // -4W, -3S, 3G (space for one dwarf)
    SIMPLE_DWELLING_01: 'Simple dwelling',      // -4W, -2S, 0G (space for one dwarf)
    SIMPLE_DWELLING_02: 'Simple dwelling',      // -3W, -3S, 0G (space for one dwarf)
    MIXED_DWELLING: 'Mixed dwelling',           // -5W, -4S, 4G (space for pair of farm animals)
    COUPLE_DWELLING: 'Couple dwelling',         // -8W, -6S, 5G (space for two dwarfs)
    ADDITIONAL_DWELLING: 'Additional dwelling', // -4W, -3S, 5G (space for 6th dwarf)

    // special furnishing tiles
    CUDDLE_ROOM: 'Cuddle room',                 // -1W, 2G (space for as many sheep as dwarfs)
    BREAKFAST_ROOM: 'Breakfast room',           // -1W, 0G (space for 3 cattle)
    STUBBLE_ROOM: 'Stubble room',               // -1W, -1o, 1G (one farm animal on each empty field)
    WORK_ROOM: 'Work room',                     // -1S, 2G (can furnish over tunnels)
    GUEST_ROOM: 'Guest room',                   // -1W, -1S, 0G (either...or => and/or)
    OFFICE_ROOM: 'Office room',                 // -1S, 0G (overlap tiles => 2G)

    // ... for building materials
    CARPENTER: 'Carpenter',                     // -1S, 0G (Discount 1W for furnishing and build fences)
    STONE_CARVER: 'Stone carver',               // -1W, 2S, 1G (Discount 1S for furnishing and stable)
    BLACKSMITH: 'Blacksmith',                   // -1W, -2S, 2o, 3G (Discount 2o for forge)
    MINER: 'Miner',                             // -1W, -1S, 3G (each round 1o foreach Ore mine with a donkey)
    BUILDER: 'Builder',                         // -1S, 2G (replace 1W with 1o and/or 1S with 1o for furnishing)
    TRADER: 'Trader',                           // -1W, 2G (2G => 1W, 1S, 1o) [NOTE: can not have Spare part storage at the same time]
    WOOD_SUPPLIER: 'Wood supplier',             // -1S, 2G (7W one each round)
    STONE_SUPPLIER: 'Stone supplier',           // -1W, 1G (5S one each round)
    RUBY_SUPPLIER: 'Ruby supplier',             // -2W, -2S, 2G (4R one each round)
    DOG_SCHOOL: 'Dog school',                   // 0G (1W for each new dog)
    QUARRY: 'Quarry',                           // -1W, 2G (1S for each newborn donkey)
    SEAM: 'Seam',                               // -2W, 1G (1o foreach stone)

    // ... for food
    SLAUGHTERING_CAVE: 'Slaughtering cave',     // -2W, -2S, 2G (1 extra food for animal)
    COOKING_CAVE: 'Cooking cave',               // -2S, 2G (5 food for pack of grain + veggy)
    WORKING_CAVE: 'Working cave',               // -1W, -1S, 2G (feed one dwarf with: 1 food or 1W or 1S)
    MINING_CAVE: 'Mining cave',                 // -3W, -2S, 2G (reduce food cost by 1 per donkey in a mine)
    BREADING_CAVE: 'Breading cave',             // -1G, -1S, 2G (one food for each type of animal breed. Five food if you breed all types)
    PEACEFUL_CAVE: 'Peaceful cave',             // -2W, -2S, 2G (Trade weapons for food)

    // ... for food and points
    WEAVING_PARLOR: 'Weaving parlor',           // -2W, -1S (Immediately 1 food per sheep, when scoring 1 point per 2 sheep)
    MILKING_PARLOR: 'Milking parlor',           // -2W, -2S (Immediately 1 food per cattle, when scoring 1 point per cattle)
    STATE_PARLOR: 'State parlor',               // -3S, -5G (Immediately 2 food per adjacent dwelling, when scoring 4 points per adjacent dwelling)
    HUNTING_PARLOR: 'Hunting parlor',           // -2W, 1G (2b => 2G + 2food) [NOTE: can not be used in combination with Slaughtering cave]
    BEER_PARLOR: 'Beer parlor',                 // -2W, 3G (2G => 4 food, or 2G => 3G)
    BLACKSMITHING_PARLOR: 'Blacksmithing parlor', // 3o, 2G (1R + 1o => 2G + 1 food)

    // ... for bonus points
    STONE_STORAGE: 'Stone storage',             // -3W, -1o (when scoring 1 point per stone)
    ORE_STORAGE: 'Ore storage',                 // -1W, -2S (when scoring 1 point per 2 ore)
    SPARE_PART_STORAGE: 'Spare part storage',   // -2W, 0G (1W + 1S + 1o => 2G) [NOTE: can not have Trader at the same time]
    MAIN_STORAGE: 'Main storage',               // -2W, -1S (when scoring 2 points per yellow tile)
    WEAPON_STORAGE: 'Weapon storage',           // -3W, -2S (when scoring 3 points per armed dwarf)
    SUPPLIES_STORAGE: 'Supplies storage',       // -3f, -1W (when scoring 8 points if all dwarf are armed)
    BROOM_CHAMBER: 'Broom chamber',             // -1W (when scoring 5 dwarfs => 5 points, 6 dwarfs => 10 points)
    TREASURE_CHAMBER: 'Treasure chamber',       // -1W, -1S (when scoring 1 point per ruby)
    FOOD_CHAMBER: 'Food chamber',               // -2W, -2V (when scoring 2 points per GV) [NOTE: counting G and V in fields]
    PRAYER_CHAMBER: 'Prayer chamber',           // -2W (when scoring 8 points if no armed dwarf)
    WRITING_CHAMBER: 'Writing chamber',         // -2S, 0G (prevents up to 7 negative points)
    FODDER_CHAMBER: 'Fodder chamber',           // -1S, -2G (when scoring 1 point for 3 farm animals)
};
