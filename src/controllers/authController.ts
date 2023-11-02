import { Request, Response } from 'express'
import Role from '../scheme/Role'
import User from '../scheme/User'
import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator'

class authController {
    async registration(req: Request, res: Response) {
        try {
            //получаем ошибки из req, с помощью Middleware
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Ошибка при регистрации', errors })
            }
            //ищем пользователя
            const { username, password } = req.body
            const candidate = await User.findOne({ username })
            //если нашли возвращаем ошибку
            if (candidate) {
                return res.status(400).json({ message: 'Пользователь с таким именем уже существует' })
            }
            const hashPassword = bcrypt.hashSync('password', 7) //хэшируем пароль - 7 это степень хэширования
            const userRole = await Role.findOne({ value: 'USER' }) // добавляем роль
            const user = new User({ username, password: hashPassword, roles: [userRole?.value] })
            await user.save() // сохраняем в бд
            return res.json({ message: 'Пользователь успешно зарегистрирован' })
        } catch (e: any) {
            console.log(e)
            res.status(400).json({ message: 'Registration error' })
        }
    }

    async login(req: Request, res: Response) {
        try {
        } catch (e: any) {
            console.log(e)
            res.status(400).json({ message: 'Login error' })
        }
    }

    async getUsers(req: Request, res: Response) {
        try {
            // костыль для добавления ролей
            // const userRole = await Role.create({})
            // const adminRole = await Role.create({ value: 'ADMIN' })
            res.json('server work')
        } catch (e: any) {}
    }
}

export default new authController()
