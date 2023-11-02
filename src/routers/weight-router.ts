import { Router } from 'express'
// import weightController from '../controllers/WeightController'
import weightController from '../controllers/weightController'

export const weightRouter = Router({})

weightRouter.get('/', weightController.getAll)
weightRouter.get('/:id', weightController.getOne)
weightRouter.post('/', weightController.create)
weightRouter.put('/:id', weightController.update)
weightRouter.delete('/:id', weightController.delete)
