import Bowerman from '../class/bowerman';

test('create object bowman', () => {
  const bowerman = new Bowerman('bowman');
  const expactation = {
    name: 'bowman', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(bowerman).toEqual(expactation);
});
