'use strict';

var random = {

  /** Random number between min (inclusive) and max (exclusive)
   * @param {Number} min
   * @param {Number} max
   * @returns {Number}
   */
  num: function num(min, max) {
    return Math.random() * (max - min) + min;
  },


  /** Random integer between min and max values
   * @param {Number} min
   * @param {Number} max
   * @returns {Number}
   */
  int: function int(min, max) {
    return Math.round(this.num(min, max));
  },


  /** Random boolean
   * @param {Number} okProbability probability of 'true'
   * @returns {Boolean}
   */
  ok: function ok() {
    var okProbability = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;

    if (okProbability > 100) throw new Error('Probability must be less then 100');
    if (okProbability < 0) throw new Error('Probability must be more then 0');
    return this.num(0, 100) < okProbability;
  },


  /** Random string
   * @param {Number} length string length
   * @param {String} strSource set of letters to construct resulting string
   * @returns {String}
   */
  str: function str() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var strSource = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'abcdefghijklmnopqrstuvwxyz';

    var res = '';
    for (var i = 0; i < length; i++) {
      res += strSource[this.int(0, strSource.length - 1)];
    }
    return res;
  },


  /** If length given then random array of elements, even if length is 1
   *  If no length given, then one random element
   * @param {Array} arr source array
   * @param {Number} length how much elements to return
   * @returns {Mix|Array} Random array element or array of random elements
   */
  element: function element(arr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    if (!length) return arr[this.int(0, arr.length - 1)];
    if (length === 1) return [arr[this.int(0, arr.length - 1)]];
    if (length >= arr.length) return arr;

    var arrx = arr.filter(function () {
      return true;
    }); // copy source array
    var res = [];
    for (var i = 0; i < length; i++) {
      var k = this.int(0, arrx.length - 1);
      res = res.concat(arrx.splice(k, 1));
    }
    return res;
  },


  /** Number that randomly offsets from original with given tolerance
   * @param {Number} val source number
   * @param {Number} percentage permissible deviation (tolerance)
   * @returns {Mix|Array}
   */
  shift: function shift(val) {
    var percentage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    if (val === null) return null;

    var offset = val / 100 * percentage;
    return this.num(val - offset, val + offset);
  },


  /** Integer that randomly offsets from original with given tolerance
   * @param {Number} val source number
   * @param {Number} percentage permissible deviation (tolerance)
   * @returns {Mix|Array}
   */
  intShift: function intShift(val) {
    var percentage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    if (val === null) return null;
    return Math.round(this.shift(val, percentage));
  }
};

if (typeof module !== 'undefined' && module.exports) module.exports = random;