module.exports = error =>
  new class extends Error {
    constructor(...args) {
      super(...args);
      Error.captureStackTrace(this, this.constructor);
    }
  }(error);
