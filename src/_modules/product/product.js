'use strict';

// Constructor
var Product = function() {
  this.name = 'product';
  console.log('%s module', this.name.toLowerCase());
};

module.exports = Product;
