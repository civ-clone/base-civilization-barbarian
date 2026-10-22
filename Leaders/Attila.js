"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attila = void 0;
const Leader_1 = require("@civ-clone/core-civilization/Leader");
const Barbarian_1 = require("../Barbarian");
// The leader v474.05's slot 0 names (its `NationDefinition` is Attila, Barbarians, Barbarian).
class Attila extends Leader_1.default {
    static civilization() {
        return Barbarian_1.default;
    }
    name() {
        return 'Attila';
    }
}
exports.Attila = Attila;
exports.default = Attila;
//# sourceMappingURL=Attila.js.map