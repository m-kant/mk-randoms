'use strict';

const random = {

  /** Random number between min (inclusive) and max (exclusive)
   * @param {Number} min
   * @param {Number} max
   * @returns {Number}
   */
  num(min, max) {
    return (Math.random() * (max - min)) + min;
  },

  /** Random integer between min and max values
   * @param {Number} min
   * @param {Number} max
   * @returns {Number}
   */
  int(min, max){
    return Math.round( this.num(min, max) );
  },

  /** Random boolean
   * @param {Number} okProbability probability of 'true'
   * @returns {Boolean}
   */
  ok(okProbability = 50){
    if(okProbability > 100)throw new Error('Probability must be less then 100');
    if(okProbability < 0)throw new Error('Probability must be more then 0');
    return (this.num(0, 100) < okProbability);
  },

  /** Random string
   * @param {Number} length string length
   * @param {String} strSource set of letters to construct resulting string
   * @returns {String}
   */
  str(length = 1, strSource = 'abcdefghijklmnopqrstuvwxyz') {
    let res = '';
    for(let i = 0; i < length; i++){
      res += strSource[this.int(0, strSource.length - 1)];
    }
    return res;
  },

  /** Random array element or array of random elements
   * @param {Array} arr source array
   * @param {Number} quantity how much elements to return
   * @returns {Mix|Array}
   */
  element(arr, quantity = 1){
    if(quantity === 1) return arr[this.int(0, arr.length - 1)];
    if(quantity >= arr.length) return arr;

    const arrx = arr.filter( () => true ); // copy source array
    let res = [];
    for(let i = 0; i < quantity; i++){
      const k = this.int(0, arrx.length - 1);
      res = res.concat( arrx.splice(k, 1) );
    }
    return res;
  },

  /** Number that randomly offsets from original with given tolerance
   * @param {Number} val source number
   * @param {Number} percentage permissible deviation (tolerance)
   * @returns {Mix|Array}
   */
  shift( val, percentage = 10){
    if(val === null)return null;

    const offset = (val / 100) * percentage;
    return this.num( val - offset, val + offset );
  },

  /** Integer that randomly offsets from original with given tolerance
   * @param {Number} val source number
   * @param {Number} percentage permissible deviation (tolerance)
   * @returns {Mix|Array}
   */
  intShift( val, percentage = 10 ){
    if(val === null)return null;
    return Math.round( this.shift( val, percentage ) );
  },

};

