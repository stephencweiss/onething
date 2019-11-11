import userRouter from './user/routes'
// TODO: Build out scheduleRouter and entryRouter
// TODO: Add signup/in routes & protection middleware (for auth)

export const mountRoutes = app => {
  app.use('/api/users', userRouter)
  // app.use('/signin', signin)
  // app.use('/signup', signup)
  // app.use('/api', protect)
  // app.use('/api/schedule', scheduleRouter)
  // app.use('/api/entry', entryRouter)
}
