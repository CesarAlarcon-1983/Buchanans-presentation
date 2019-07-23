'use strict';

var Product = require('../product');

describe('Product View', function() {

  beforeEach(function() {
    this.product = new Product();
  });

  it('Should run a few assertions', function() {
    expect(this.product);
  });

});
