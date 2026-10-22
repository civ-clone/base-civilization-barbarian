"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Barbarian_1 = require("./Barbarian");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
// Grey with a red trim: no civilization has a mid-grey primary, and the red nods to v474.05's barbarian red, which the
//  civilizations' palette already uses (civ-clone/web-renderer#169).
Object.entries({
    people: 'Barbarian',
    nation: 'Barbarians',
    colors: ['#7A7A7A', '#D50000'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Barbarian_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map