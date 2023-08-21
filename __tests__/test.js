import Character from '../src/js/character';

test('create object', () => {
  const result = new Character('man', 'Swordsman');
  const expactation = {
    name: 'man', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(result).toEqual(expactation);
});

test('create object with uncorrect type of name', () => {
  const result = new Character(123, 'Bowman');
  expect(result).toEqual(new Error('Parameter is not a string or incorrect length!'));
});

test('create object with uncorrect length of name', () => {
  const result = new Character('a', 'Bowman');
  expect(result).toEqual(new Error('Parameter is not a string or incorrect length!'));
});

test('create object with incorrect type', () => {
  const result = new Character('man', 'lala');
  expect(result).toEqual(new Error('Type is incorrect!'));
});
