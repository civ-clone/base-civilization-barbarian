import { Attila } from '../Leaders';
import Barbarian from '../Barbarian';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Leader from '@civ-clone/core-civilization/Leader';
import { expect } from 'chai';
import isBarbarian from '../isBarbarian';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';
import { instance as civilizationRegistryInstance } from '@civ-clone/core-civilization/CivilizationRegistry';
import { instance as leaderRegistryInstance } from '@civ-clone/core-civilization/LeaderRegistry';
import '../index';

describe('Barbarian', (): void => {
  it('has its people, nation and colours', (): void => {
    const attributes = Object.fromEntries(
      attributeRegistryInstance
        .getByCivilization(Barbarian)
        .map((attribute) => [attribute.name(), attribute.value()])
    );

    expect(attributes.people).to.equal('Barbarian');
    expect(attributes.nation).to.equal('Barbarians');
    expect(attributes.colors).to.eql(['#7A7A7A', '#D50000']);
  });

  it('is led by Attila', (): void => {
    expect(Attila.civilization()).to.equal(Barbarian);
    expect(new Attila().name()).to.equal('Attila');
    expect(new Attila()).to.be.instanceOf(Leader);
  });

  it('is in neither the civilization nor the leader registry', (): void => {
    expect(civilizationRegistryInstance.includes(Barbarian)).to.be.false;
    expect(leaderRegistryInstance.includes(Attila)).to.be.false;
  });
});

describe('isBarbarian', (): void => {
  it('is true for a player with the Barbarian civilization and false for another', (): void => {
    expect(isBarbarian({ civilization: () => new Barbarian() })).to.be.true;
    expect(isBarbarian({ civilization: () => new Civilization() })).to.be.false;
  });

  it('is false while the player has no civilization', (): void => {
    expect(
      isBarbarian({
        civilization: (): Civilization => {
          throw new TypeError('Player#civilization is unset.');
        },
      })
    ).to.be.false;
  });
});
