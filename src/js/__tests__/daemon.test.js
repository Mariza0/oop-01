import Daemon from '../class/daemon';

test('create object daemon', () => {
  const daemon = new Daemon('daemon');
  const expactation = {
    name: 'daemon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(daemon).toEqual(expactation);
});
