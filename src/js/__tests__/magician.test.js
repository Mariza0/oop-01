import Magician from '../class/magician';

test('create object magician', () => {
  const magician = new Magician('magician');
  const expactation = {
    name: 'magician', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(magician).toEqual(expactation);
});
