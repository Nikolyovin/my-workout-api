import { Request, Response, NextFunction } from 'express'
import { secret } from '../config'
import jwt from 'jsonwebtoken'
import { IGetUserAuthInfoRequest } from '../models/authType'
// import { IGetUserAuthInfoRequest } from '../models/authType'

module.exports = function (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.headers.authorization?.split(' ')[1] //так как нам не нужен тип токена, а только сам токен, мы сплитим
        if (!token) {
            return res.status(403).json({ message: 'Пользователь не авторизован' })
        }
        const decodedData = jwt.verify(token, secret) //дешифровка токена - нужен сам токен и ключ
        req.user = decodedData
        next()
    } catch (e: any) {
        console.log(e)
        return res.status(403).json({ message: 'Пользователь не авторизован' })
    }
}
