import Router from 'express-promise-router'
import {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getUsers,
} from './controller'
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

export default userRouter
