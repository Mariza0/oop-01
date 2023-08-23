import Character from '../class/character';

test('create object', () => {
  const result = new Character('swordsman', 'Swordsman');
  const expactation = {
    name: 'swordsman', type: 'Swordsman', health: 100, level: 1, attack: undefined, defence: undefined,
  };
  expect(result).toEqual(expactation);
});

test('create object with incorrect type of name', () => {
  const result = () => new Character(123, 'Bowman');
  expect(result).toThrow(new Error('Parameter is not a string or incorrect length!'));
});

test('create object with incorrect length of name', () => {
  const result = () => new Character('a', 'Bowman');
  expect(result).toThrow(new Error('Parameter is not a string or incorrect length!'));
});

test('create object with incorrect type', () => {
  const result = () => new Character('man', 'lala');
  expect(result).toThrow(new Error('Type is incorrect!'));
});
