import { Request } from 'express'
import { JwtPayload } from 'jsonwebtoken'

export type LoginRequestType = {
    username: string
    password: string
}

export type RegistrationType = {
    username: string
    password: string
}

export interface IGetUserAuthInfoRequest extends Request {
    user: string | JwtPayload // or any other type
}
