import { Pool } from 'pg';
import config from '../config'

const host = config.db.host;
const user = config.db.username;
const pw = config.db.password;
const db = config.db.database;
const port = config.db.port;
const connectionString = `postgres://${user}:${pw}@${host}:${port}/${db}`;

export const pool = new Pool({ connectionString })

export const connect = () => {
  const pool = new Pool({ connectionString })
  console.log(`Connected to --> `, JSON.stringify({pool, host, user, db, port, connectionString}, null, 2))
  return pool;
}

export default {
  query: (text, params, callback) => {
    const start = Date.now();
    return pool.query(text, params, (err, res) => {
      const duration = Date.now() - start
      console.log(`executed query --> `, JSON.stringify({text, duration, rows: res.rowCount}, null, 2))
      callback(err, res)
    })
  },
  getClient: callback => pool.connect((err, client, done) => (
    callback(err, client, done)
  ))
}

// const dbConnection = {query}
// export default dbConnection