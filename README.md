# mk-randoms
Generate random values of different types with clear syntax with 1K lib.

Random integer, random array element, random string, random boolean with given probability, random offset of numerical.

## Installation
```sh
npm install --save mk-randoms
```

## Inclusion
Node js:
```JavaScript
var random = require('mk-randoms')
```
ES6:
```JavaScript
import random from 'mk-randoms/dist/random.es6'
import random from 'mk-randoms' // this will work as well
```
Browser:
```HTML
<script src="node_modules/mk-randoms/dist/random.min.js"></script>
```

## Usage
### random.num(min, max)
Random numerical value between min and max values.
### random.int(min, max)
Random integer between min and max values.
### random.ok([okProbability])
Random boolean. 
okProbability - is an optional probability of "TRUE" value percentage, dafault is 50.
### random.str([length][, sourceStr])
Random string. 
length: is a length of string, dafault is 1. 
sourceStr: is a set of acceptable characters, default is "abcdefghijklmnopqrstuvwxyz"
### random.element(arr[, quantity])
Random element of array, or array - random subset of sourse array, where every source element can be copied no more then one time. 
arr: source array. 
quantity: default is 1, if 1 returns random array element, otherwise it is a length of resulting array, if quantity is larger then source array length, then returns source array.
### random.shift(val[, percentage])
Random shift of numerical value.
val: original number.
percentage: amplitude of discrepancy, default is 10.
### random.intShift(val[, percentage])
Random integer shift of integer value.
val: original number.
percentage: amplitude of discrepancy, default is 10.