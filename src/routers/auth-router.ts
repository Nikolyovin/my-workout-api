import { Router } from 'express'
import authController from '../controllers/authController'
import { check } from 'express-validator'
const authMiddleware = require('../middlewaree/authMiddleware')
const roleMiddleware = require('../middlewaree/roleMiddleware')

export const authRouter = Router({})

authRouter.post(
    '/registration',
    [
        check('username', 'Имя пользователя не может быть пустым.').notEmpty(),
        check('password', 'Пароль должен быть больше 4 и меньше 10 символов.').isLength({ min: 4, max: 10 })
    ],
    authController.registration
)
authRouter.post('/login', authController.login)
authRouter.get('/users', roleMiddleware('ADMIN'), authController.getUsers)
