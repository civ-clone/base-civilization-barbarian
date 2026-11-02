import Barbarian from './Barbarian';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

// Grey with a red trim: no civilization has a mid-grey primary, and the red nods to v474.05's barbarian red, which the
//  civilizations' palette already uses (civ-clone/web-renderer#169).
Object.entries({
  people: 'Barbarian',
  nation: 'Barbarians',
  colors: ['#8C8C8C', '#4A0000'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Barbarian, name, value))
);
