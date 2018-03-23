const error = require('../error');

const asNumber = (previous, next) => Number(previous) - Number(next);

const repeat = (value, times) =>
  Array.apply(null, { length: times }).map(value.valueOf, value);

const extract = ({ remaining, output }, format) => {
  const amount = Math.floor(remaining / format);

  return {
    remaining: remaining - amount * format,
    output: output.concat(repeat(format.toFixed(2), amount)),
  };
};

const initial = remaining => ({ output: [], remaining });

const withdraw = formats => value => {
  const { remaining, output } = formats.reduce(extract, initial(value));

  return remaining ? debug('NoteUnavailableException') : output;
};

const debug = type => {
  throw error(type);
};

const negative = object => Number(object) < 0;

const validate = callback => value => {
  const valid = !isNaN(value) && !negative(value);

  return valid ? callback(value) : debug('InvalidArgumentException');
};

module.exports = ({ formats }) => ({
  withdraw: validate(withdraw(formats.sort(asNumber).reverse())),
});
