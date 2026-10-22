"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barbarian = void 0;
const Civilization_1 = require("@civ-clone/core-civilization/Civilization");
/**
 * The barbarians: the raiders every Civilization game has, who belong to no one and can't be talked to.
 *
 * Unlike the other `base-civilization-*` packages, importing this one registers the civilization's attributes only.
 * It goes in neither the `CivilizationRegistry` nor the `LeaderRegistry`, so it is never offered as a choice, never
 * drawn for a new player and never brought back for a destroyed one. A ruleset that spawns barbarians registers both
 * just before it claims them for the barbarian player (`civ1-barbarians`), and `isBarbarian` tells that player apart.
 */
class Barbarian extends Civilization_1.default {
}
exports.Barbarian = Barbarian;
exports.default = Barbarian;
//# sourceMappingURL=Barbarian.js.map