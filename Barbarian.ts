import Civilization from '@civ-clone/core-civilization/Civilization';

/**
 * The barbarians: the raiders every Civilization game has, who belong to no one and can't be talked to.
 *
 * Unlike the other `base-civilization-*` packages, importing this one registers the civilization's attributes only.
 * It goes in neither the `CivilizationRegistry` nor the `LeaderRegistry`, so it is never offered as a choice, never
 * drawn for a new player and never brought back for a destroyed one. A ruleset that spawns barbarians registers both
 * just before it claims them for the barbarian player (`civ1-barbarians`), and `isBarbarian` tells that player apart.
 */
export class Barbarian extends Civilization {}

export default Barbarian;
