const express = require('express')
const { json, urlencoded } = require('body-parser')
const path = require('path')
const morgan = require('morgan')
const config = require('./config')
const cors = require('cors')
const { mountRoutes } = require('./resources')

const app = express()

app.disable('x-powered-by')

//todo: add compression
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/', express.static(path.join(__dirname, '../client/dist')))

mountRoutes(app)

const start = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`REST API @ http://localhost:${config.port}`)
    })
  } catch (e) {
    console.error(e)
  }
}

module.exports = { app, start }
