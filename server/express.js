//  importando dependencias
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')

//  aplicando middlewares
app.use(helmet())
app.use(cors())
app.use(bodyParser.urlencoded({ limit: '2mb', extended: false }))
app.use(bodyParser.json({ limit: '2mb' }))
app.use(compression())

// Frontend 
if (process.env.NODE_ENV === 'development') {
  const webpack = require('../config/webpack')
  app.use(webpack.middleware)
  app.use(webpack.hotMiddleware)
  app.get('/', (req, res) => {
    res.write(webpack.middleware.fileSystem.readFileSync(path.join(__dirname, '../assets/dist/index.html')))
    res.end()
  })
}

module.exports = app