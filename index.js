const express = require('express');
const machine = require('./src/cash-machine');

const port = 1337;

const app = ({ params: { value } }, response) => {
  const { withdraw } = machine({ formats: [100.0, 50.0, 20.0, 10.0] });

  try {
    response.json(withdraw(value || null));
  } catch ({ message }) {
    response.status(500).send(message);
  }
};

const welcome = () => console.log(`Checkout http://localhost:${port}`);

module.exports = express()
  .get('/:value?', app)
  .listen(port, welcome);
