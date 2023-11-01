import { Request } from 'express'

// делаем типы для того чтобы не писать Request<{}, {}, {title: string} > и тд при типизации запросов в ендпоинтах
export type RequestWithBody<T> = Request<{}, {}, T>
export type RequestWithQuery<T> = Request<{}, {}, {}, T>
export type RequestWithParams<T> = Request<T>
export type RequestWithParamsAndBody<T, B> = Request<T, {}, B>
