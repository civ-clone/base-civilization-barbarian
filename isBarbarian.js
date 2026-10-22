"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBarbarian = void 0;
const Barbarian_1 = require("./Barbarian");
/**
 * Whether `player` is the barbarians: whether its civilization is `Barbarian`.
 *
 * A player whose civilization is not set yet (its `Added` rules run before one is) is not. Rules that run then and
 * must treat the barbarians differently are disabled around their creation instead, as `civ1-barbarians` does.
 */
const isBarbarian = (player) => {
    try {
        return player.civilization() instanceof Barbarian_1.default;
    }
    catch (error) {
        return false;
    }
};
exports.isBarbarian = isBarbarian;
exports.default = exports.isBarbarian;
//# sourceMappingURL=isBarbarian.js.map