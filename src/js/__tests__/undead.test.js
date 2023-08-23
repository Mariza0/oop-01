import Undead from '../class/undead';

test('create object undead', () => {
  const undead = new Undead('undead');
  const expactation = {
    name: 'undead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(undead).toEqual(expactation);
});
