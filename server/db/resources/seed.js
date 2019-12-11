import faker from 'faker'
import { pool } from '../index'
import SQL from 'sql-template-strings'

const createUser = () => {
  const email = faker.internet.email()
  const name = faker.name.findName()
  return { email, name }
}

const bulkAddUsers = () => {
  const users = []
  for (let i = 0; i < 100; i += 1) {
    users.push(createUser())
  }

  const insertQuery = SQL`
  INSERT INTO users
  (name, email)
  VALUES
`
  insertQuery.append()

  pool.query(insertQuery)
}

bulkAddUsers()
