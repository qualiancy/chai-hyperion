module.exports = process.env.chaiHyperion_COV
  ? require('./lib-cov/chai-hyperion')
  : require('./lib/chai-hyperion');
