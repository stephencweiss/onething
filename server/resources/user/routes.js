const Router = require('express-promise-router')
const {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getUsers,
} = require('./controller')
const userRouter = new Router()

userRouter
  .route('/')
  .get(getUsers)
  .post(createUser)

userRouter
  .route('/:id')
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser)

module.exports = userRouter
