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
  return `(${userId},${templateId},${frequency},current_timestamp)`
}

const seedDB = async () => {
  console.log(`start seedDB --> `)
  const users = []
  const templates = []
  const schedules = []
  for (let i = 1; i < 10; i += 1) {
    users.push(createUser())
    for (let j = 1; j < faker.random.number({ min: 2, max: 3 }); j += 1) {
      templates.push(createTemplate({ userId: i }))
      schedules.push(createSchedule({ userId: i, templateId: j }))
    }
  }

  const userQuery = SQL`
  INSERT INTO users
  (name, email)
  VALUES
`
  userQuery.append(users.join(',')).append(';')

  const templateQuery = SQL`
    INSERT INTO templates
    (owner_id, body, public)
    VALUES
  `

  templateQuery.append(templates.join(',')).append(';')

  const scheduleQuery = SQL`
    INSERT INTO schedules
    (owner_id, template_id, frequency, start_date)
    VALUES
  `
    .append(schedules.join(','))
    .append(';')

  console.log(
    `dummy data --> \n`,
    JSON.stringify(
      { users, userQuery, templates, templateQuery, schedules, scheduleQuery },
      null,
      2
    )
  )

  const results = await pool
    .query(userQuery)
    .catch(error => console.error(`error with users -->\n`, error))

  const templateResults = await pool
    .query(templateQuery)
    .catch(error => console.error(`error with templates -->\n`, error))
  const scheduleResults = await pool
    .query(scheduleQuery)
    .catch(error => console.error(`error with schedules -->\n`, error))

  console.log(
    `finished seedDB! -->\n`,
    JSON.stringify({ results, scheduleResults, templateResults }, null, 2)
  )
}

seedDB()
