const SQL = require('sql-template-strings')
const { pool } = require('../../db')

const getUsers = async (req, res) => {
  // TODO: Determine how to handle passwords so that we're not sending them back
  try {
    const { rows } = await pool.query(
      SQL`SELECT name, email FROM users ORDER BY id ASC`
    )
    res.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
}

const getUserById = async (req, res) => {
  // TODO: Determine how to handle passwords so that we're not sending them back
  const { id } = req.params
  try {
    const { rows } = await pool.query(
      SQL`SELECT name, email FROM users where id = ${id}`
    )
    res.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
}

const createUser = async (req, res) => {
  //TODO: Add Hashing for passwords

  const { name, email, password } = req.body
  try {
    const { rows } = await pool.query(SQL`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${password})
      RETURNING *
    `)
    res.status(201).json({ data: { id: rows[0].id } })
  } catch (error) {
    throw new Error(error)
  }
}

const updateUser = async (req, res) => {
  //TODO: Add Hashing for passwords
  const { id, name, email, password } = req.body
  try {
    const { rows } = await pool.query(SQL`
      UPDATE users AS u
      SET
        name = COALESCE (${name}, u.name)
        , email = COALESCE (${email}, u.email)
        , password = COALESCE (${password}, u.password)
      WHERE u.id = ${id}
      RETURNING u.id, u.name, u.email`)
    res.status(200).json({ data: rows[0].id })
  } catch (error) {
    throw new Error(error)
  }
}

const deleteUser = async (req, res) => {
  // TODO: Add support for softDelete
  const { id } = req.params
  try {
    const { rows } = await pool.query(SQL`
      DELETE FROM users WHERE id = ${id}
      RETURNING id
    `)
    res.status(200).json({ data: { id: rows[0].id } })
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { getUsers, getUserById, deleteUser, createUser, updateUser }
