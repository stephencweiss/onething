import { pool } from '../../db'

export const getOne = model => async (req, res) => {}
export const getMany = model => async (req, res) => {}
export const createOne = model => async (req, res) => {}
// export const createMany = model => async (req, res) => {}
export const updateOne = model => async (req, res) => {}
// export const updateMany = model => async (req, res) => {}
export const deleteOne = model => async (req, res) => {}
// export const deleteMany = model => async (req, res) => {}

/**
 * Suite of generic controllers that require a model to have access to basic CRUD operations
 * @param {*} model
 */
export const crudControllers = model => ({
  createOne: createOne(model),
  deleteOne: deleteOne(model),
  getOne: getOne(model),
  getMany: getMany(model),
  updateOne: updateOne(model),
})