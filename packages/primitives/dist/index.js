
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./primitives.cjs.production.min.js')
} else {
  module.exports = require('./primitives.cjs.development.js')
}
