if (process.env.NODE_ENV === 'production') {
  module.exports = require('./config.prod')
} else if(process.env.NODE_ENV === 'test'){
  module.exports = require('./config.test')
} else {
   module.exports = require('./config.dev')
}
