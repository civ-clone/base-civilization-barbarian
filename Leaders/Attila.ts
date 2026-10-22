import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Barbarian from '../Barbarian';

// The leader v474.05's slot 0 names (its `NationDefinition` is Attila, Barbarians, Barbarian).
export class Attila extends Leader {
  static civilization(): typeof Civilization {
    return Barbarian;
  }

  name(): string {
    return 'Attila';
  }
}

export default Attila;
