import { Router } from 'express'
const authMiddleware = require('../middlewaree/authMiddleware')
import weightController from '../controllers/weightController'
import { check } from 'express-validator'

export const weightRouter = Router({})

weightRouter.get('/', authMiddleware, weightController.getAll)
weightRouter.get('/:id', authMiddleware, weightController.getOne)
weightRouter.post(
    '/',
    authMiddleware,
    // [check('weight', 'Вес пользователя не может быть пустым').notEmpty(), check('date', 'Заполните дату').notEmpty()],
    weightController.create
)
weightRouter.put(
    '/:id',
    // [check('weight', 'Вес пользователя не может быть пустым').notEmpty(), check('date', 'Заполните дату').notEmpty()],
    authMiddleware,
    weightController.update
)
weightRouter.delete('/:id', authMiddleware, weightController.delete)
