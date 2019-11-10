import express from 'express'
import { json, urlencoded } from 'body-parser'
import path from "path"
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
// import { connect } from './utils/db'
// import userRouter from './resources/user/user.router'
// import scheduleRouter from './resources/schedule/schedule.router'
// import entryRouter from './resources/entry/entry.router'
// import { signin, signup, protect } from './utils/auth'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/api/users', (req, res) => {
  return res.status(200).json([{id: 1, name: 'ab'}, {id: 2,name: 'def'}])
})
app.use('/', express.static(path.join(__dirname,'../client/dist')))

// app.use('/signin', signin)
// app.use('/signup', signup)
// app.use('/api', protect)
// app.use('/api/user', userRouter)
// app.use('/api/schedule', scheduleRouter)
// app.use('/api/entry', entryRouter)

export const start = async () => {
  try {
    // await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
