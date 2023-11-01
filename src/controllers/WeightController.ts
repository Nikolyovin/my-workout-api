import { Request, Response } from 'express'
import WeightService from '../services/WeightService'
import { WeightRequestType, WeightResponseType } from '../models'

// в контроллерах только логика с req res
class WeightController {
    async getAll(res: Response<WeightResponseType[]>) {
        try {
            const weightAll = await WeightService.getAll()
            res.json(weightAll)
        } catch (e: any) {
            res.status(500).json(e)
        }
    }

    async getOne(req: Request, res: Response<WeightResponseType>) {
        try {
            const weight = await WeightService.getOne(req.params.id)
            if (weight) res.json(weight)
        } catch (e: any) {
            res.status(500).json(e)
        }
    }

    async create(req: Request<WeightRequestType>, res: Response<WeightResponseType>) {
        try {
            console.log('req.body', req.body)
            const weight = await WeightService.create(req.body)
            console.log('weight', weight)
            res.json(weight)
        } catch (e: any) {
            res.status(500).json(e)
        }
    }
}

export default new WeightController()
