const { print } = require('@ianwalter/print')

module.exports = function log (msg) {
  return print.log('👋', msg)
}
