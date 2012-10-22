/*!
 * Chai Hyperion
 * Copyright (c) 2012 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var chaiHttp = require('chai-http');

/*!
 * export chai.use() function
 *
 * @param {Chai}
 * @param {Chai.utils}
 */

module.exports = function (_chai, _) {
  // include dependancy
  _chai.use(chaiHttp);

  // load our sub plugins
  require('./hyperion/application')(_chai, _);
};
