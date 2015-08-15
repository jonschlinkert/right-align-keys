/*!
 * right-align-keys <https://github.com/jonschlinkert/right-align-keys>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('isobject');
var longest = require('longest');
var pad = require('pad-left');

module.exports = function rightAlignKeys(obj) {
  if (!isObject(obj)) {
    throw new TypeError('right-align-keys expects an object.');
  }

  var keys = Object.keys(obj);
  var max = longest(keys).length;
  var res = {};

  var len = keys.length, i = -1;
  while (++i < len) {
    var key = keys[i];
    var prop = pad(key, max, ' ');
    res[prop] = obj[key];
  }
  return res;
};
