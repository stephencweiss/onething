const faker = require('faker')
const { pool } = require('../index')
const SQL = require('sql-template-strings')

const createUser = () => {
  const email = `'${faker.internet.email()}'`
  const name = `'${faker.name.findName()}'`
  return `(${name},${email})`
}

const createTemplate = ({ userId }) => {
  const body = `'${faker.random.words(4)}'`
  const public = faker.random.boolean()
  return `(${userId},${body},${public})`
}

const createSchedule = ({ userId, templateId }) => {
  const frequency = `'${faker.random.arrayElement([
    'DAILY',
    'WEEKLY',
    'MONTHLY',
  ])}'`
  const startDate = Date.now()
  return `(${userId},${templateId},${frequency},${startDate})`
}

const bulkAddUsers = async () => {
  console.log(`start --> `)
  const users = []
  const templates = []
  const schedules = []
  for (let i = 0; i < 10; i += 1) {
    users.push(createUser())
    for (let j = 0; j < faker.random.number({ min: 1, max: 3 }); j += 1) {
      templates.push(createTemplate({ userId: i }))
      schedules.push(createSchedule({ userId: i, templateId: j }))
    }
  }

  const query = SQL`
  INSERT INTO users
  (name, email)
  VALUES
`
  query.append(users.join(',')).append(';')

  const childQuery = SQL`
    INSERT INTO templates
    (owner_id, body, public)
    VALUES
  `

  childQuery
    .append(templates.join(','))
    .append(';')
    .append(
      `
    INSERT INTO schedules
    (owner_id, template_id, frequency, start_date)
    VALUES
  `
    )
    .append(schedules.join(','))

  console.log(
    `dummy data --> \n`,
    JSON.stringify({ users, templates, schedules }, null, 2)
  )

//   const results = await pool.query(query)
  const childResults = await pool.query(childQuery)
  console.log(`finished!`, JSON.stringify({ results, childResults }, null, 2))
}

bulkAddUsers()
