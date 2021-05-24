require('./models/Settings')
require('./models/User')
require('./models/Menu')
require('./models/Post')
require('./models/Event')
require('./models/Page')
require('./models/Contact')
require('./models/Media')
require('./models/Product')
require('./models/Order')
require('./config/passport')

const mongoose = require('mongoose')
const isProduction = process.env.NODE_ENV === 'production'

mongoose.set('useFindAndModify', false)
if (isProduction) {
  mongoose.set('debug', true)
  mongoose.connect(process.env.MONGODB_URI, {
    keepAlive: 1,
    connectTimeoutMS: 30000,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
} else {
  mongoose.set('debug', true)
  mongoose.connect('mongodb://localhost/' + process.env.APP_NAME, { useNewUrlParser: true, useUnifiedTopology: true })
}
