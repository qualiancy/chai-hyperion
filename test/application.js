describe('application', function () {

  it('can recognize a hyperion app', function () {
    var app = hyperion();
    app.should.be.a.hyperion;
    ({}).should.not.be.a.hyperion;
  });

});
