import Civilization from '@civ-clone/core-civilization/Civilization';
/**
 * Whether `player` is the barbarians: whether its civilization is `Barbarian`.
 *
 * A player whose civilization is not set yet (its `Added` rules run before one is) is not. Rules that run then and
 * must treat the barbarians differently are disabled around their creation instead, as `civ1-barbarians` does.
 */
export declare const isBarbarian: (player: {
  civilization(): Civilization;
}) => boolean;
export default isBarbarian;
