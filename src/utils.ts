import jwt from 'jsonwebtoken'
import { secret } from './config'
import { ObjectId } from 'mongoose'

export const generateAccessToken = (id: string, roles: string[]) => {
    const payload = {
        id,
        roles
    }
    //1)в payload добавили id юзера и его роли 2) секретный ключ, который будет знать только сервер 3) храним 24 часа
    return jwt.sign(payload, secret, { expiresIn: '3h' })
}
