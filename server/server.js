import express from 'express'
import { json, urlencoded } from 'body-parser'
import path from 'path'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import { mountRoutes } from './resources'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/', express.static(path.join(__dirname, '../client/dist')))

mountRoutes(app)

export const start = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`REST API @ http://localhost:${config.port}`)
    })
  } catch (e) {
    console.error(e)
  }
}
