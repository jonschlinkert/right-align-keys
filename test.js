/*!
 * right-align-keys <https://github.com/jonschlinkert/right-align-keys>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var should = require('should');
var align = require('./');

describe('right align keys', function () {
  describe('object:', function () {
    it('should right-align the keys of an object:', function () {
      align({aaa: 'b', ccccc: 'dddddd', e: 'fff', gggggg: 'hhhhh'}).should.eql({
        '   aaa': 'b',
        ' ccccc': 'dddddd',
        '     e': 'fff',
        'gggggg': 'hhhhh'
      });

      align({a: 'x', bbb: 'x', ccccc: 'x', ddddddd: 'x'}).should.eql({
        '      a': 'x',
        '    bbb': 'x',
        '  ccccc': 'x',
        'ddddddd': 'x'
      });
    });
  });

  it('should throw an error when an object is not passed:', function () {
    (function () {
      align();
    }).should.throw('right-align-keys expects an object.');
  });
});
