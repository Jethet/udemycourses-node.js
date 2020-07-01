const pathMod = require('path')

// console.log(__filename);
// console.log(pathMod.basename(__filename));

const utilMod = require('util')
// console.log(utilMod);

const first = require('./mods/first.js')
first()

const last = require('./mods/last.js')
last()