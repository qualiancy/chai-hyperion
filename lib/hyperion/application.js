/*!
 * Chai Hyperion - Application tests
 * Copyright (c) 2012 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */

module.exports = function (chai, _) {
  var Assertion = chai.Assertion;

  Assertion.addProperty('hyperion', function () {
    var app = new Assertion(this._obj);
    _.transferFlags(this, app, false);
    app.is.a('function');
    app.to.have.property('__hyperionVersion');
  });

};
