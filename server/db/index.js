import { Pool } from 'pg'
import config from '../config'

const host = config.db.host
const user = config.db.username
const pw = config.db.password
const db = config.db.database
const port = config.db.port
const connectionString = `postgres://${user}:${pw}@${host}:${port}/${db}`

export const pool = new Pool({ connectionString })
