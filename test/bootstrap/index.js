/*!
 * Attach chai to global should
 */

global.chai = require('chai');
global.should = global.chai.should();
global.hyperion = require('hyperion');

/*!
 * Chai Plugins
 */

//global.chai.use(require('chai-spies'));
//global.chai.use(require('chai-http'));

/*!
 * Import project
 */

global.chai.use(require('../..'));
