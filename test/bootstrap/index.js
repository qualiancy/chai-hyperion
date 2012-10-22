/*!
 * Attach chai to global should
 */

global.chai = require('chai');
global.should = global.chai.should();

/*!
 * Chai Plugins
 */

//global.chai.use(require('chai-spies'));
//global.chai.use(require('chai-http'));

/*!
 * Import project
 */

global.chai-hyperion = require('../..');

/*!
 * Helper to load internals for cov unit tests
 */

function req (name) {
  return process.env.chai-hyperion_COV
    ? require('../../lib-cov/chai-hyperion/' + name)
    : require('../../lib/chai-hyperion/' + name);
}

/*!
 * Load unexposed modules for unit tests
 */

global.__chai-hyperion = {};
