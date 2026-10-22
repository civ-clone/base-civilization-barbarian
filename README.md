# base-civilization-barbarian

The barbarians, for any ruleset that has raiders who belong to no civilization.

- `Barbarian`: the civilization, with `people: 'Barbarian'`, `nation: 'Barbarians'` and its colours registered as
  attributes on import.
- `Leaders`: `Attila`, as Civilization I names the barbarian slot.
- `isBarbarian(player)`: whether a player is the barbarians.

Importing the package registers the attributes only. `Barbarian` and `Attila` are deliberately **not** put in the
`CivilizationRegistry` or `LeaderRegistry`: a civilization in those is offered to players at the start, drawn for a
player added mid-game and brought back for a destroyed one. A ruleset that spawns barbarians registers both just
before it claims them for the barbarian player, which takes them out again. Barbarians have no city names of their
own: the cities they take keep theirs, and they found none.
