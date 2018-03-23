const test = require('tape');
const machine = require('../src/cash-machine');

const { withdraw } = machine({ formats: [100.0, 50.0, 20.0, 10.0] });

const cast = object => JSON.stringify(object);

test('withdraw 30.00 should result [20.00, 10.00]', ({ plan, equal }) => {
  plan(1);
  equal(cast(withdraw(30.0)), cast(['20.00', '10.00']));
});

test('withdraw 80.00 should result [50.00, 20.00, 10.00]', ({
  plan,
  equal,
}) => {
  plan(1);
  equal(cast(withdraw(80.0)), cast(['50.00', '20.00', '10.00']));
});

test('withdraw 125.00 should throw NoteUnavailableException', ({
  plan,
  throws,
}) => {
  plan(1);
  throws(() => withdraw(125.0), null, 'NoteUnavailableException');
});

test('withdraw -130.00 should throw InvalidArgumentException', ({
  plan,
  throws,
}) => {
  plan(1);
  throws(() => withdraw(-130.0), null, 'InvalidArgumentException');
});

test('withdraw null should result []', ({ plan, equal }) => {
  plan(1);
  equal(cast(withdraw(null)), cast([]));
});
