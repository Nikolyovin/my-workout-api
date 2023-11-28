import { NextFunction, Request, Response } from 'express'
import { secret } from '../config'
import jwt from 'jsonwebtoken'

// чтобы мидлвеер узнавал какие роли разрешены, воспользуемся замыканием
module.exports = function (roles: string[]) {
    return function (req: Request, res: Response, next: NextFunction) {
        if (req.method === 'OPTIONS') {
            next()
        }

        try {
            const token = req.headers.authorization?.split(' ')[1] //так как нам не нужен тип токена, а только сам токен, мы сплитим
            if (!token) {
                return res.status(403).json({ message: 'Пользователь не авторизован' })
            }
            // декодируем токен и из него достаем массив ролей
            const { roles: userRoles }: any = jwt.verify(token, secret)
            // const userRoles = jwt.verify(token, secret).rol
            let hasRole = false
            console.log('userRoles', userRoles)

            userRoles.forEach((role: string) => {
                if (roles.includes(role)) {
                    hasRole = true
                }
            })
            if (!hasRole) {
                return res.status(403).json({ message: 'У вас нет доступа' })
            }
            //проверяем есть ли в спике роли, которые разрешены для этой функции
            next()
        } catch (e: any) {
            console.log(e)
            return res.status(403).json({ message: 'Пользователь не авторизован' })
        }
    }
}
