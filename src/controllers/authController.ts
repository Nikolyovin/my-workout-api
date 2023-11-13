import { Request, Response } from 'express'
import Role from '../scheme/Role'
import User from '../scheme/User'
import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator'
import { IUserResponse, LoginRequestType, RegistrationType } from '../models/authType'
import { generateAccessToken } from '../utils'

class authController {
    async registration(req: Request<RegistrationType>, res: Response) {
        try {
            //получаем ошибки из req, с помощью Middleware
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Ошибка при регистрации.', errors })
            }
            //ищем пользователя
            const { username, password } = req.body
            const candidate = await User.findOne({ username })
            //если нашли возвращаем ошибку
            if (candidate) {
                return res.status(400).json({ message: 'Пользователь с таким именем уже существует.' })
            }
            const hashPassword = bcrypt.hashSync(password, 7) //хэшируем пароль - 7 это степень хэширования
            const userRole = await Role.findOne({ value: 'USER' }) // добавляем роль
            const user = new User({ username, password: hashPassword, roles: [userRole?.value] })
            await user.save() // сохраняем в бд
            return res.json({ success: 'Пользователь успешно зарегистрирован!' })
        } catch (e: any) {
            console.log(e)
            res.status(400).json({ message: 'Registration error.' })
        }
    }

    async login(req: Request<LoginRequestType>, res: Response) {
        try {
            const { username, password } = req.body
            const user: IUserResponse | null = await User.findOne({ username })

            if (!user) {
                return res.status(400).json({ message: `Пользователь ${username} не найден.` })
            }
            //сравниваем пароль обычный с хэшированным
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({ message: 'Введен неверный пароль.' })
            }
            const token = generateAccessToken(user._id.toString(), user.roles)
            return res.json({ token, user: user.username })
        } catch (e: any) {
            console.log(e)
            res.status(400).json({ message: 'Login error.' })
        }
    }

    async getUsers(req: Request, res: Response) {
        try {
            // костыль для добавления ролей
            // const userRole = await Role.create({})
            // const adminRole = await Role.create({ value: 'ADMIN' })
            const users = await User.find()
            res.json(users)
        } catch (e: any) {
            console.log()
        }
    }
}

export default new authController()
