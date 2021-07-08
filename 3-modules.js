// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const sayHi = require('./5-utils')
const names = require('./4-names')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') 



sayHi(data.singlePerson.name)
sayHi(names.ivana)
sayHi(names.anja)
sayHi(names.aleksa)
sayHi(names.andrija)
