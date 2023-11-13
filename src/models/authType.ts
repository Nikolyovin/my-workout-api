import { Request } from 'express'
import { JwtPayload } from 'jsonwebtoken'
import { Document } from 'mongoose'

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

export interface IUserResponse extends Document {
    username: string
    password: string
    roles: string[]
}
