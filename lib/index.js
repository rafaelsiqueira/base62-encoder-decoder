const charset = require('./charset')


module.exports = {
  encoder: require('./encoder')(charset),
  decoder: require('./decoder')(charset)
}
