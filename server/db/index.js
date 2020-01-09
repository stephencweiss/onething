const { Pool } = require('pg')
const config = require('../config')

const host = config.db.host
const user = config.db.username
const pw = config.db.password
const db = config.db.database
const port = config.db.port
const connectionString = `postgres://${user}:${pw}@${host}:${port}/${db}`

const pool = new Pool({ connectionString })
module.exports = { pool }
