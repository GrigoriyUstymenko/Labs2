'use strict';

const fn = function() {
  console.log(a);
  var a = 5;
};

fn();

module.exports = { fn };
