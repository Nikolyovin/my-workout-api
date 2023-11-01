import { Router } from 'express'
import WeightController from '../controllers/WeightController'

export const weightRouter = Router({})

weightRouter.get('/', WeightController.getAll)
weightRouter.get('/:id', WeightController.getOne)
weightRouter.post('/', WeightController.create)
weightRouter.put('/:id', WeightController.update)
weightRouter.delete('/:id', WeightController.delete)
